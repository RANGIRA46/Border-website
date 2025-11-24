import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plane } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function RefugeeTravelApplication() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

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
                        <h1 className="text-2xl font-bold">{t('refugeeTravel.title')}</h1>
                    </div>
                    <p className="text-indigo-100">{t('refugeeTravel.subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">{t('refugeeTravel.refugeeStatus')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('refugeeTravel.asylumNumber')}</label>
                                <Input required placeholder={t('refugeeTravel.asylumNumber')} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('common.address')}</label>
                                <Input required placeholder={t('common.address')} />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 border-b pb-2">{t('common.travelDetails')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('refugeeTravel.destination')}</label>
                                <Input required placeholder={t('refugeeTravel.destination')} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('refugeeTravel.purpose')}</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option>{t('common.medical')}</option>
                                    <option>{t('common.education')}</option>
                                    <option>{t('common.familyReunion')}</option>
                                    <option>{t('common.resettlement')}</option>
                                    <option>{t('common.other')}</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <Link to="/">
                            <Button type="button" variant="ghost" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> {t('common.cancel')}
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                            {isSubmitting ? t('common.loading') : t('common.submit')}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
