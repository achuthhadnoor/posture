import { Routes, Route, HashRouter } from 'react-router-dom';
import LicensePage from './screens/license';
import { electronAPIType } from './preload';

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
                <Route path="/screens" element={<div>sample</div>} />
            </Routes>
        </HashRouter>
    )
}

export default App