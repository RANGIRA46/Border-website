import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function LaissezPasserApplication() {
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
                <div className="bg-red-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Laissez-Passer Application</h1>
                    </div>
                    <p className="text-red-100">Emergency travel documents for urgent travel.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-sm">
                        <strong>Note:</strong> Laissez-Passer is only issued for emergency travel when a regular passport cannot be obtained in time. Proof of emergency is required.
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">Travel Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Destination Country</label>
                                <Input placeholder="Enter destination" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Travel Date</label>
                                <Input type="date" />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-sm font-medium">Reason for Urgency</label>
                                <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Explain why you need this document..." />
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Request Emergency Document'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
