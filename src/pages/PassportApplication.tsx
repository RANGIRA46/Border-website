import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { useState } from 'react';

export default function PassportApplication() {
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
                <div className="bg-blue-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Passport Application</h1>
                    </div>
                    <p className="text-blue-100">Complete the form below to apply for a new passport.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input placeholder="Enter first name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input placeholder="Enter last name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Date of Birth</label>
                                <Input type="date" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">National ID Number</label>
                                <Input placeholder="e.g. 123456789" />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Contact Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <Input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <Input type="tel" placeholder="+1 234 567 890" />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-sm font-medium">Residential Address</label>
                                <Input placeholder="Street address, City, Country" />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Submit Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
