import { useState } from 'react';
import { Search, Filter, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchFiltersProps {
    onSearch: (filters: any) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        query: '',
        passportNumber: '',
        applicationId: '',
        nationalId: '',
        status: '',
        type: '',
        dateFrom: '',
        dateTo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(filters);
    };

    const clearFilters = () => {
        setFilters({
            query: '',
            passportNumber: '',
            applicationId: '',
            nationalId: '',
            status: '',
            type: '',
            dateFrom: '',
            dateTo: '',
        });
        onSearch({});
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 space-y-4">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Input
                            name="query"
                            placeholder="Global Search (Name, ID, Passport #)..."
                            className="pl-10 h-12 text-lg border-slate-200"
                            value={filters.query}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 px-6 gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Filter className="w-4 h-4" />
                        {isOpen ? 'Hide Filters' : 'Advanced Filters'}
                    </Button>
                    <Button type="submit" className="h-12 px-8 bg-navy-900 hover:bg-navy-800">
                        Search
                    </Button>
                </div>

                {isOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 animate-in slide-in-from-top-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Application ID</label>
                            <Input
                                name="applicationId"
                                placeholder="e.g. APP-2023-001"
                                value={filters.applicationId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Passport Number</label>
                            <Input
                                name="passportNumber"
                                placeholder="e.g. P12345678"
                                value={filters.passportNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">National ID</label>
                            <Input
                                name="nationalId"
                                placeholder="e.g. 11990..."
                                value={filters.nationalId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Status</label>
                            <select
                                name="status"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={filters.status}
                                onChange={handleChange}
                            >
                                <option value="">All Statuses</option>
                                <option value="Pending">Pending</option>
                                <option value="Under Review">Under Review</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Application Type</label>
                            <select
                                name="type"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={filters.type}
                                onChange={handleChange}
                            >
                                <option value="">All Types</option>
                                <option value="Passport">Passport</option>
                                <option value="Visa">Visa</option>
                                <option value="Permit">Permit</option>
                                <option value="Citizenship">Citizenship</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Date From</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <Input
                                    type="date"
                                    name="dateFrom"
                                    className="pl-10"
                                    value={filters.dateFrom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Date To</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <Input
                                    type="date"
                                    name="dateTo"
                                    className="pl-10"
                                    value={filters.dateTo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={clearFilters}
                            >
                                <X className="w-4 h-4 mr-2" /> Clear Filters
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
