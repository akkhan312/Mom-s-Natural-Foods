import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
      {/* Top Promo Bar */}
      <div className="bg-yellow-400 text-center text-sm py-5 font-medium">
        Free Shipping on Orders Over ₺750
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Mom's Natural" className="h-10" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-800">
            <Link to="#">360G GRANOLA</Link>
            <Link to="#">200G GRANOLA</Link>
            <Link to="#">GLUTEN-FREE GRANOLA BITES</Link>
            <Link to="#">GLUTEN-FREE COOKIES</Link>
            <Link to="#">GLUTEN-FREE & ORGANIC MUESLI & GRANOLA</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <FaSearch className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
}
