import './styles.css';
import { Routes, Route } from 'react-router-dom';

import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Forum from '../pages/Forum';
import Landing from '../pages/Landing';
import Shop from '../pages/Shop';
import Providers from './Providers';

function App() {
  return (
        <Providers>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/forum' element={<Forum />} />
                <Route path='/shop' element={<Shop />} />

                <Route path='*' element={<p>404</p>} />
            </Routes>
        </Providers>
  );
}

export default App;