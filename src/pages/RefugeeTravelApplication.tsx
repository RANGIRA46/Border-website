import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plane } from 'lucide-react';
import { useState } from 'react';

export default function RefugeeTravelApplication() {
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
                <div className="bg-indigo-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <Plane className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Refugee Travel Document</h1>
                    </div>
                    <p className="text-indigo-100">Apply for a Convention Travel Document (CTD).</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Refugee Status</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Refugee ID Number</label>
                                <Input required placeholder="Enter refugee ID" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Camp / Location</label>
                                <Input required placeholder="Enter camp name or location" />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Travel Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Intended Destination</label>
                                <Input required placeholder="Country of destination" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Purpose of Travel</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option>Medical</option>
                                    <option>Education</option>
                                    <option>Family Reunion</option>
                                    <option>Resettlement</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button type="button" variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Submit Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
