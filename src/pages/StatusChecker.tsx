import { useState } from 'react';
import { Search, CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function StatusChecker() {
    const [searchId, setSearchId] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setLoading(false);
            if (searchId === '123') {
                setResult({
                    id: '123',
                    status: 'approved',
                    type: 'Passport',
                    applicant: 'John Doe',
                    date: '2023-10-15'
                });
            } else if (searchId === '456') {
                setResult({
                    id: '456',
                    status: 'pending',
                    type: 'Visa',
                    applicant: 'Jane Smith',
                    date: '2023-11-01'
                });
            } else {
                setResult({ status: 'not_found' });
            }
        }, 1000);
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-in fade-in duration-500">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Track Application
                    </h1>
                    <p className="text-muted-foreground">
                        Enter your Application ID to check the real-time status.
                    </p>
                </div>

                <form onSubmit={handleSearch} className="flex gap-2">
                    <Input
                        placeholder="e.g., APP-12345678"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        className="h-12 text-lg"
                    />
                    <Button type="submit" size="lg" className="h-12 px-8" disabled={loading}>
                        {loading ? <Clock className="animate-spin" /> : <Search />}
                    </Button>
                </form>

                {result && (
                    <div className="mt-8 p-6 border rounded-xl shadow-lg bg-card animate-in slide-in-from-bottom-4">
                        {result.status === 'not_found' ? (
                            <div className="text-center text-destructive">
                                <XCircle className="w-12 h-12 mx-auto mb-2" />
                                <h3 className="text-xl font-semibold">Application Not Found</h3>
                                <p>Please check the ID and try again.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Application ID</p>
                                        <p className="font-mono font-bold">{result.id}</p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${result.status === 'approved' ? 'bg-green-100 text-green-700' :
                                            result.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                        }`}>
                                        {result.status.toUpperCase()}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Type</p>
                                        <p className="font-medium">{result.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Applicant</p>
                                        <p className="font-medium">{result.applicant}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Date Submitted</p>
                                        <p className="font-medium">{result.date}</p>
                                    </div>
                                </div>
                                {result.status === 'approved' && (
                                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="text-sm font-medium">Ready for collection</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                <div className="text-center">
                    <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-1">
                        Back to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
