import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, UserSquare2 } from 'lucide-react';
import { useState } from 'react';

export default function ForeignersIDApplication() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            navigate('/success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-teal-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <UserSquare2 className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Foreigner ID Card</h1>
                    </div>
                    <p className="text-teal-100">Apply for a Foreigner Identification Card.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Identification Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Passport Number</label>
                                <Input required placeholder="Enter passport number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Visa / Permit Reference</label>
                                <Input required placeholder="Enter reference number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nationality</label>
                                <Input required placeholder="Enter nationality" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Date of Birth</label>
                                <Input required type="date" />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Residency Information</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Local Address</label>
                                <Input required placeholder="Street, Sector, District" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Occupation</label>
                                <Input required placeholder="Current occupation" />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button type="button" variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Submit Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
