import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Users, FileText, Shield, Settings, LogOut, ChevronLeft, ChevronRight, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchFilters } from '@/components/search/SearchFilters';

// Mock Data Generator
const generateMockData = () => {
    const types = ['Passport', 'Visa', 'Permit', 'Citizenship', 'Foreigner ID', 'Refugee Travel'];
    const statuses = ['Pending', 'Under Review', 'Approved', 'Rejected'];
    const names = ['John Doe', 'Alice Smith', 'Bob Johnson', 'Sarah Wilson', 'Michael Brown', 'Emily Davis', 'David Miller', 'Jessica Taylor'];

    return Array.from({ length: 50 }).map((_, i) => ({
        id: `APP-2023-${String(i + 1).padStart(3, '0')}`,
        name: names[i % names.length],
        passportNumber: `P${10000000 + i}`,
        nationalId: `11990800${String(i).padStart(8, '0')}`,
        type: types[i % types.length],
        status: statuses[i % statuses.length],
        date: new Date(2023, 10, (i % 30) + 1).toISOString().split('T')[0],
        officer: `Officer ${String((i % 5) + 1)}`
    }));
};

const ALL_APPLICATIONS = generateMockData();

export default function AdminPanel() {
    const [filters, setFilters] = useState<any>({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter Logic
    const filteredApps = useMemo(() => {
        return ALL_APPLICATIONS.filter(app => {
            // Global Query Search
            if (filters.query) {
                const query = filters.query.toLowerCase();
                const matchesQuery =
                    app.name.toLowerCase().includes(query) ||
                    app.id.toLowerCase().includes(query) ||
                    app.passportNumber.toLowerCase().includes(query) ||
                    app.nationalId.includes(query);

                if (!matchesQuery) return false;
            }

            // Specific Filters
            if (filters.applicationId && !app.id.toLowerCase().includes(filters.applicationId.toLowerCase())) return false;
            if (filters.passportNumber && !app.passportNumber.toLowerCase().includes(filters.passportNumber.toLowerCase())) return false;
            if (filters.nationalId && !app.nationalId.includes(filters.nationalId)) return false;
            if (filters.status && app.status !== filters.status) return false;
            if (filters.type && app.type !== filters.type) return false;

            // Date Range
            if (filters.dateFrom && app.date < filters.dateFrom) return false;
            if (filters.dateTo && app.date > filters.dateTo) return false;

            return true;
        });
    }, [filters]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
    const paginatedApps = filteredApps.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = (newFilters: any) => {
        setFilters(newFilters);
        setCurrentPage(1); // Reset to first page on new search
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-navy-900 text-white p-6 z-20 shadow-xl">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <span className="font-bold text-lg block leading-none">Admin Portal</span>
                        <span className="text-xs text-blue-300">Border Control</span>
                    </div>
                </div>

                {/* Quick Search in Sidebar */}
                <div className="mb-8">
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Quick ID Lookup..."
                            className="w-full bg-navy-800 border border-navy-700 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-navy-800">
                        <Users className="w-4 h-4 mr-2" /> Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-white bg-navy-800 shadow-sm">
                        <FileText className="w-4 h-4 mr-2" /> Applications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-navy-800">
                        <Settings className="w-4 h-4 mr-2" /> System Settings
                    </Button>
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-6 px-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                            AD
                        </div>
                        <div>
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-xs text-slate-400">Super Admin</p>
                        </div>
                    </div>
                    <Link to="/">
                        <Button variant="outline" className="w-full border-navy-700 text-slate-300 hover:bg-navy-800 hover:text-white bg-transparent">
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-navy-900">Application Management</h1>
                        <p className="text-slate-500">Search, review, and manage all border applications.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="gap-2 bg-white">
                            <Download className="w-4 h-4" /> Export Report
                        </Button>
                        <Button className="bg-navy-900 text-white hover:bg-navy-800">
                            + New Application
                        </Button>
                    </div>
                </div>

                {/* Advanced Search Component */}
                <SearchFilters onSearch={handleSearch} />

                {/* Results Table */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                        <h3 className="font-semibold text-slate-700">Search Results <span className="text-slate-400 font-normal">({filteredApps.length} found)</span></h3>
                        <div className="text-sm text-slate-500">
                            Showing {Math.min(filteredApps.length, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(filteredApps.length, currentPage * itemsPerPage)}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="p-4 font-medium text-slate-500">Application ID</th>
                                    <th className="p-4 font-medium text-slate-500">Applicant</th>
                                    <th className="p-4 font-medium text-slate-500">Passport / ID</th>
                                    <th className="p-4 font-medium text-slate-500">Type</th>
                                    <th className="p-4 font-medium text-slate-500">Date</th>
                                    <th className="p-4 font-medium text-slate-500">Assigned To</th>
                                    <th className="p-4 font-medium text-slate-500">Status</th>
                                    <th className="p-4 font-medium text-slate-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {paginatedApps.map((app) => (
                                    <tr key={app.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="p-4 font-mono text-slate-600 font-medium group-hover:text-blue-600">{app.id}</td>
                                        <td className="p-4 font-medium text-slate-900">
                                            {app.name}
                                            <div className="text-xs text-slate-400">{app.nationalId}</div>
                                        </td>
                                        <td className="p-4 text-slate-600 font-mono text-xs">{app.passportNumber}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${app.type === 'Passport' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                app.type === 'Visa' ? 'bg-green-50 text-green-700 border-green-100' :
                                                    app.type === 'Permit' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                                        'bg-amber-50 text-amber-700 border-amber-100'
                                                }`}>
                                                {app.type}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-600">{app.date}</td>
                                        <td className="p-4 text-slate-600">{app.officer}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                                app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                                    app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8">
                                                View
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredApps.length === 0 && (
                        <div className="p-12 text-center text-slate-500">
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <SearchIcon className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">No applications found</h3>
                            <p>Try adjusting your search filters or query.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredApps.length > 0 && (
                        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="gap-1"
                            >
                                <ChevronLeft className="w-4 h-4" /> Previous
                            </Button>
                            <div className="text-sm font-medium text-slate-600">
                                Page {currentPage} of {totalPages}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="gap-1"
                            >
                                Next <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
