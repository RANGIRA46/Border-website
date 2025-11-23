import { Link } from 'react-router-dom';
import { Shield, Search, FileText, UserCheck, Globe, Briefcase, Flag, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden bg-navy-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900" />

                <div className="relative max-w-6xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 text-blue-200"
                    >
                        <Globe className="w-4 h-4" />
                        <span>Official Government Portal</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200"
                    >
                        Secure Borders,<br />Seamless Travel
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
                    >
                        The advanced digital platform for passport issuance, visa processing, and identity management.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 pt-8"
                    >
                        <Link to="/passport">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-none h-14 px-8 text-lg shadow-lg shadow-blue-900/20">
                                Apply for Passport
                            </Button>
                        </Link>
                        <Link to="/status">
                            <Button size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/20 h-14 px-8 text-lg backdrop-blur-sm">
                                Check Status
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Access a wide range of immigration and border control services online.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            to="/passport"
                            icon={<FileText className="w-8 h-8 text-blue-600" />}
                            title="Passport Services"
                            description="New applications, renewals, and replacements for citizens."
                            color="bg-blue-50"
                        />
                        <ServiceCard
                            to="/visa"
                            icon={<Shield className="w-8 h-8 text-green-600" />}
                            title="Visa Applications"
                            description="Travel authorization for visitors and tourists."
                            color="bg-green-50"
                        />
                        <ServiceCard
                            to="/permits"
                            icon={<Briefcase className="w-8 h-8 text-purple-600" />}
                            title="Work & Residence"
                            description="Permits for employment, study, and residence."
                            color="bg-purple-50"
                        />
                        <ServiceCard
                            to="/citizenship"
                            icon={<Flag className="w-8 h-8 text-amber-600" />}
                            title="Citizenship"
                            description="Naturalization and citizenship registration."
                            color="bg-amber-50"
                        />
                        <ServiceCard
                            to="/laissez-passer"
                            icon={<AlertTriangle className="w-8 h-8 text-red-600" />}
                            title="Laissez-Passer"
                            description="Emergency travel documents."
                            color="bg-red-50"
                        />
                        <ServiceCard
                            to="/foreigner-id"
                            icon={<UserCheck className="w-8 h-8 text-teal-600" />}
                            title="Foreigner ID"
                            description="Identification for foreign residents."
                            color="bg-teal-50"
                        />
                        <ServiceCard
                            to="/refugee-travel"
                            icon={<Globe className="w-8 h-8 text-indigo-600" />}
                            title="Refugee Travel"
                            description="Convention Travel Documents (CTD)."
                            color="bg-indigo-50"
                        />
                        <ServiceCard
                            to="/status"
                            icon={<Search className="w-8 h-8 text-navy-600" />}
                            title="Track Application"
                            description="Real-time status updates on your requests."
                            color="bg-navy-50"
                        />
                    </div>
                </div>
            </section>

            {/* Officer Section */}
            <section className="py-24 px-4 bg-card border-t border-border">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-navy-50 px-3 py-1 rounded-full text-xs font-bold text-navy-700 uppercase tracking-wider">
                            Restricted Access
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Officer Portal</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Secure access for border control officers and administrators to manage applications, verify identities, and monitor border crossings.
                        </p>
                        <ul className="space-y-3">
                            {['Biometric Enrollment & Verification', 'Real-time Watchlist Screening', 'Entry/Exit Logging', 'Advanced Analytics'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Link to="/admin">
                                <Button className="bg-navy-900 text-white hover:bg-navy-800 gap-2">
                                    Access Portal <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 bg-muted rounded-2xl p-8 aspect-video flex items-center justify-center">
                        <UserCheck className="w-24 h-24 text-slate-300" />
                        {/* Placeholder for dashboard screenshot */}
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ to, icon, title, description, color }: { to: string, icon: React.ReactNode, title: string, description: string, color: string }) {
    return (
        <Link to={to} className="group block p-8 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1">
            <div className={`mb-6 p-4 rounded-xl w-fit transition-colors ${color}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </Link>
    );
}
