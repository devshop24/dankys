import './styles.css';
import { Routes, Route } from 'react-router-dom';

import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
// import Forum from '../pages/Forum';
import Landing from '../pages/Landing';
// import Shop from '../pages/Shop';
import FourOhFour from '../pages/404';
import ComingSoon from '../pages/ComingSoon';

import Providers from './Providers';

function App() {
  return (
        <Providers>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/forum' element={<ComingSoon />} />
                <Route path='/shop' element={<ComingSoon />} />

                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </Providers>
  );
}

export default App;