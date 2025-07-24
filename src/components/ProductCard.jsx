import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold mt-1">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}