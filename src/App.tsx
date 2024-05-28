import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
 import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Components/Navigation/Navigation';
import { Loader } from './Components/Loader';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));

const App: React.FC = () => {
    return (
        
         <HashRouter>
         <Navigation />
         <Suspense fallback={<Loader />}>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contacts />} />
             <Route path="*" element={<NotFound />} />
         </Routes>
         </Suspense>
     </HashRouter>
    );
};

export default App;