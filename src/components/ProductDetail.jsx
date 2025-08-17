import { useParams, Link } from 'react-router-dom';
import productsData from '../data.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <Link to="/productos" className="mt-4 inline-block text-blue-500">Volver a Productos</Link>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="container p-4 pb-8 md:p-8 gap-8 grid grid-cols-1 md:grid-cols-2 bg-white/60 rounded-lg shadow-md">
        <div className="w-full">
          <img src={product.image} alt={product.name} className="w-full rounded-lg p-2 bg-orange-50" />
        </div>
        <div className="min-w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">${product.price}</p>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-sm text-gray-500 mb-6">Categoría:
            <span className="font-semibold">{product.category}</span>
          </p>
          <button onClick={() => {
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('text', 'Comprar ' + product.name + ' Codigo: ' + product.id);

            window.location.href = `https://wa.me/584129457071?${urlParams.toString()}`;
          }} className="cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;