import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import StaticPage from './components/StaticPage';
import ProductsByCategory from './components/ProductsByCategory';
import homeBg from './assets/home-bg.jpg';

// Componente simple para la página de inicio con el banner
const Home = () => (
  <div className="p-4">
    {/* Banner replicando la imagen */}
    <div style={{
      backgroundImage: 'url("' + homeBg + '")'
    }} className="h-80 bg-center object-center bg-cover flex items-center justify-center mb-8 rounded-lg">
      
    </div>
    <ProductList />
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-[#FEFAEF] min-h-screen">
        <Header />
        <div className="mx-0 md:flex">
          <Sidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<ProductList filter={true} />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/categorias/:categoryName" element={<ProductsByCategory title="Categoría específica" content="Aquí se mostrarían los productos de una categoría." />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/acerca-de" element={<StaticPage title="Acerca de Nosotros" content="Somos una empresa que se dedica a la venta y comercializacion de productos de bisuteria" />} />
              <Route path="*" element={<StaticPage title="404 - Página no encontrada" content="La página que buscas no existe." />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;