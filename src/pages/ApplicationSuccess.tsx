import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, FileText, ArrowRight } from 'lucide-react';

interface ApplicationSuccessProps {
    refId?: string;
    serviceType?: string;
}

export default function ApplicationSuccess() {
    // In a real app, retrieve these from location state or URL params
    const refId = "APP-" + Math.floor(Math.random() * 1000000);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">Application Submitted!</h1>
                    <p className="text-slate-500">Your application has been successfully received and is now being processed.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-sm text-slate-500 mb-1">Reference Number</p>
                    <p className="text-2xl font-mono font-bold text-blue-600 tracking-wider">{refId}</p>
                    <p className="text-xs text-slate-400 mt-2">Please save this ID to track your status.</p>
                </div>

                <div className="space-y-3 pt-4">
                    <Link to="/status">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                            <FileText className="w-4 h-4" /> Track Status
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="outline" className="w-full gap-2">
                            <Home className="w-4 h-4" /> Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
