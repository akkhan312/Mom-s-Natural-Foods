import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home"
import MomNaturalFoods from "./pages/MomNaturalFoods"
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div>
            <Home/>
          <MomNaturalFoods/>
          <ProductDetail/>
          </div>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
