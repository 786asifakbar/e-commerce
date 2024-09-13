import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your store
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Order from './components/Order';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Support from './components/Support';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';
// Mens Collection
import Menscasual from './pages/Menscasual';
import Tracksuits from './pages/Tracksuits';
import MensnightSuits from './pages/MensnightSuits';
import Formal from './pages/Formal';
import MensShalwarKurta from './pages/MensShalwarKurta';

// Women Collection
import Wabayacollection from './pages/Wabayacollection';
import Wdupatta from './pages/Wdupatta';
import Wformal from './pages/Wformal';
import Wjeans from './pages/Wjeans';
import Womennightsuits from './pages/Womennightsuits';
import Womensuits from './pages/Womensuits';
import Womentrouser from './pages/Womentrouser';
import Wshawl from './pages/Wshawl';
// Kids Collection
import Kformal from './pages/Kformal';
import Kshirt from './pages/Kshirt';
import Ksuits from './pages/Ksuits';
import Kkurtashalwar from './pages/Kkurtashalwar';
import Kshoes from './pages/Kshoes';
// Braidings
import BAlkaram from './pages/BAlkaram';
import BBonanza from './pages/BBonanza';
import BDinners from './pages/BDinners';
import BEdenrobe from './pages/BEdenrobe';
import BGullahmed from './pages/BGullahmed';
import BJdot from './pages/BJdot';
import BKhaadi from './pages/BKhaadi';
import BLimelight from './pages/BLimelight';
import BMoosajee from './pages/BMoosajee';
import BNishatlilen from './pages/BNishatlilen';
import BSarina from './pages/BSarina';


const App = () => {
  const [order, setOrder] = useState(null)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page only on first load if not already there
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Men Category Routes */}
        <Route path="/men/menscasual" element={<Menscasual />} />
        <Route path="/men/tracksuits" element={<Tracksuits />} />
        <Route path="/men/night-suits" element={<MensnightSuits />} />
        <Route path="/men/Formal-dress" element={<Formal />} />
        <Route path="/men/Mens-shalwarKurta" element={<MensShalwarKurta />} />

        {/* Women Category Routes */}
        <Route path="/women/women-abaya-collection" element={<Wabayacollection />} />
        <Route path="/women/women-dupatta" element={<Wdupatta />} />
        <Route path="/women/wformal" element={<Wformal />} />
        <Route path="/women/women-jeans" element={<Wjeans />} />
        <Route path="/women/women-night-suits" element={<Womennightsuits />} />
        <Route path="/women/women-suits" element={<Womensuits />} />
        <Route path="/women/women-trouser" element={<Womentrouser />} />
        <Route path="/women/women-shawls" element={<Wshawl />} />
        {/* Kids category Routes */}
        <Route path="/kid/formal-dress" element={<Kformal />} />
        <Route path="/kid/shirts" element={<Kshirt />} />
        <Route path="/kid/suits" element={<Ksuits />} />
        <Route path="/kid/shalwar-kurta" element={<Kkurtashalwar />} />
        <Route path="/kid/shoes" element={<Kshoes />} />
        {/* Braidings Category Routes */}
        <Route path="/Branding/brand-alkaram" element={<BAlkaram />} />
        <Route path="/Branding/brand-bonanza" element={<BBonanza />} />
        <Route path="/Branding/brand-dinners" element={<BDinners />} />
        <Route path="/Branding/brand-edenrobe" element={<BEdenrobe />} />
        <Route path="/Branding/brand-gullahmed" element={<BGullahmed />} />
        <Route path="/brands/bJdot" element={<BJdot />} />
        <Route path="/Brand/brand-khaadi" element={<BKhaadi />} />
        <Route path="/brands/bLimelight" element={<BLimelight />} />
        <Route path="/Branding/brand-moosajee" element={<BMoosajee />} />
        <Route path="/Branding/brand-nishatlilen" element={<BNishatlilen />} />
        <Route path="/Brand/brand-sarina" element={<BSarina />} />
        {/* Contact Category Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart   />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
        <Route path="/order-confirmation" element={<Order order={order}/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Support />
      <Footer />
    </>
  );
};

export default function MainApp() {
  return (
    <Provider store={store}> {/* Added Provider here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
