import productsData from '../data.json';
import ProductCard from './ProductCard';

const ProductList = (
  { filter = false }
) => {
  const text = new URLSearchParams(window.location.search).get('text');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.filter(itm => {
          if (filter && text) {
            return itm.name.toLowerCase().includes(text.toLowerCase());
          }
          return true;
        }).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;