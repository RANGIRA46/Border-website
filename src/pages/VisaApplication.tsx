import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { useState } from 'react';

export default function VisaApplication() {
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
                <div className="bg-green-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Visa Application</h1>
                    </div>
                    <p className="text-green-100">Apply for a travel visa to enter the country.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Travel Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Passport Number</label>
                                <Input placeholder="P1234567" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nationality</label>
                                <Input placeholder="Enter nationality" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Purpose of Visit</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option>Tourism</option>
                                    <option>Business</option>
                                    <option>Education</option>
                                    <option>Transit</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Duration of Stay (Days)</label>
                                <Input type="number" placeholder="30" />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Arrival Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Expected Arrival Date</label>
                                <Input type="date" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Port of Entry</label>
                                <Input placeholder="Airport / Border Post" />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Submit Visa Request'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
