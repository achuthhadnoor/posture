import { Routes, Route, HashRouter } from 'react-router-dom';
import LicensePage from './screens/license';
import { electronAPIType } from './preload';
import Transparent from './screens/Transparent';

declare global {
    interface Window {
        api: electronAPIType;
    }
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LicensePage />} />
                <Route path="/transparent" element={<Transparent />} />
            </Routes>
        </HashRouter>
    )
}

export default App