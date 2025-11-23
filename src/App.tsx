import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PassportApplication from './pages/PassportApplication';
import VisaApplication from './pages/VisaApplication';
import PermitApplication from './pages/PermitApplication';
import CitizenshipApplication from './pages/CitizenshipApplication';
import LaissezPasserApplication from './pages/LaissezPasserApplication';
import ForeignersIDApplication from './pages/ForeignersIDApplication';
import RefugeeTravelApplication from './pages/RefugeeTravelApplication';
import ApplicationSuccess from './pages/ApplicationSuccess';
import StatusChecker from './pages/StatusChecker';
import AdminPanel from './pages/AdminPanel';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/passport" element={<PassportApplication />} />
                    <Route path="/visa" element={<VisaApplication />} />
                    <Route path="/permits" element={<PermitApplication />} />
                    <Route path="/citizenship" element={<CitizenshipApplication />} />
                    <Route path="/laissez-passer" element={<LaissezPasserApplication />} />
                    <Route path="/foreigner-id" element={<ForeignersIDApplication />} />
                    <Route path="/refugee-travel" element={<RefugeeTravelApplication />} />
                    <Route path="/status" element={<StatusChecker />} />
                    <Route path="/success" element={<ApplicationSuccess />} />
                </Route>

                {/* Admin routes could be separate layout */}
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Router>
    )
}

export default App
