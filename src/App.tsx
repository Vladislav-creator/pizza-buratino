import React, { useState } from 'react';
import Modal from './Components/ModalDeliveryConditions/ModalDeliveryConditions';
import { HashRouter, Routes, Route } from 'react-router-dom';
 import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Components/Navigation/Navigation';
import { Loader } from './Components/Loader';
import { Suspense, lazy } from 'react';
import mySVG from './Components/Images/pizza-buratino.png';
import ClockIcon from './Components/Images/clock';
import css from './App.module.css';
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));

const App: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    return (
        
         <HashRouter>
            <div className={css.backgraundPizza}>
            <Navigation />
            <div className={css.wrapTimeDelivery}>
                <div className={css.wrapClockTimeOfWork}><div className={css.divClock}><ClockIcon/></div> <p className={css.timeOfWork}>Доставка працює з 10:00 до 22:00</p></div>
           
            <img className={css.logo}  src={mySVG} alt="Description" />
            <div className={css.app}>
      <button className={css.deliveryConditions} onClick={openModal}>
        Умови доставки
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
           </div>
            </div>
            
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