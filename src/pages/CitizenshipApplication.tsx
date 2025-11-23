import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Flag } from 'lucide-react';
import { useState } from 'react';

export default function CitizenshipApplication() {
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
                <div className="bg-amber-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <Flag className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Citizenship Application</h1>
                    </div>
                    <p className="text-amber-100">Apply for naturalization or registration.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Eligibility Category</h2>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option>Naturalization (Residency)</option>
                            <option>Marriage to Citizen</option>
                            <option>Birth (Registration)</option>
                            <option>Dual Citizenship</option>
                        </select>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Current Nationality</label>
                                <Input placeholder="Enter nationality" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Years of Residence</label>
                                <Input type="number" placeholder="5" />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Start Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
