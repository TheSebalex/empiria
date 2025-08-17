import { useParams, Link } from 'react-router-dom';
import productsData from '../data.json';
import ProductCard from './ProductCard';

const ProductsByCategory = () => {
  const { categoryName } = useParams();
  const filteredProducts = productsData.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Productos en {categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;