import { Link, Outlet } from 'react-router-dom';
import { Shield, Globe, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            {/* Header */}
            <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
                <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold leading-none tracking-tight text-foreground">BorderPass</h1>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">National Immigration Service</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link to="/passport" className="hover:text-foreground transition-colors">Passports</Link>
                        <Link to="/visa" className="hover:text-foreground transition-colors">Visas</Link>
                        <Link to="/permits" className="hover:text-foreground transition-colors">Permits</Link>
                        <Link to="/citizenship" className="hover:text-foreground transition-colors">Citizenship</Link>
                        <Link to="/status" className="hover:text-foreground transition-colors">Status</Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <ModeToggle />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                            <Globe className="w-4 h-4" />
                            <span>EN</span>
                        </div>
                        <Link to="/login">
                            <Button variant="ghost" className="hover:bg-muted hover:text-foreground">
                                <User className="w-4 h-4 mr-2" /> Sign In
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-background border-t border-border p-4 space-y-4">
                        <Link to="/passport" className="block text-muted-foreground hover:text-foreground">Passports</Link>
                        <Link to="/visa" className="block text-muted-foreground hover:text-foreground">Visas</Link>
                        <Link to="/permits" className="block text-muted-foreground hover:text-foreground">Permits</Link>
                        <Link to="/citizenship" className="block text-muted-foreground hover:text-foreground">Citizenship</Link>
                        <Link to="/status" className="block text-muted-foreground hover:text-foreground">Status</Link>
                        <div className="pt-4 border-t border-border">
                            <Link to="/login" className="block text-muted-foreground hover:text-foreground">Sign In</Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-muted/50 text-muted-foreground py-12 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-foreground">
                            <Shield className="w-6 h-6" />
                            <span className="font-bold">BorderPass</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Secure borders, seamless travel. The official platform for national immigration services.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/passport" className="hover:text-primary">Apply for Passport</Link></li>
                            <li><Link to="/visa" className="hover:text-primary">Visa Application</Link></li>
                            <li><Link to="/permits" className="hover:text-primary">Work Permits</Link></li>
                            <li><Link to="/status" className="hover:text-primary">Check Status</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link to="/accessibility" className="hover:text-primary">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-xs">
                    <p>&copy; 2025 National Border & Immigration Services. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
