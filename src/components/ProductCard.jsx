import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white/60 rounded-lg shadow-md overflow-hidden">
      <Link to={`/producto/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full bg-orange-50 p-2 h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;