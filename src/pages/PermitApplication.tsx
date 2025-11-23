import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, Building2, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function PermitApplication() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            navigate('/success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-purple-700 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Permit Application</h1>
                    </div>
                    <p className="text-purple-100">Apply for work, residence, or study permits.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Permit Type</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border rounded-lg p-4 hover:border-purple-500 cursor-pointer transition-colors bg-slate-50">
                                <Briefcase className="w-6 h-6 text-purple-600 mb-2" />
                                <h3 className="font-medium">Work Permit</h3>
                                <p className="text-xs text-slate-500">For employment</p>
                            </div>
                            <div className="border rounded-lg p-4 hover:border-purple-500 cursor-pointer transition-colors bg-slate-50">
                                <Building2 className="w-6 h-6 text-purple-600 mb-2" />
                                <h3 className="font-medium">Residence</h3>
                                <p className="text-xs text-slate-500">Long-term stay</p>
                            </div>
                            <div className="border rounded-lg p-4 hover:border-purple-500 cursor-pointer transition-colors bg-slate-50">
                                <GraduationCap className="w-6 h-6 text-purple-600 mb-2" />
                                <h3 className="font-medium">Student</h3>
                                <p className="text-xs text-slate-500">Education</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Applicant Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input placeholder="Enter full name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Passport Number</label>
                                <Input placeholder="Passport Number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Employer / Institution</label>
                                <Input placeholder="Company or School Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Duration (Months)</label>
                                <Input type="number" placeholder="12" />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Submit Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
