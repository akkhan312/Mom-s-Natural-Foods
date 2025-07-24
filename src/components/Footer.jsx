import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Give Us Feedback</h2>
          <p className="text-sm mb-4">
            At Mom's Natural Foods, we value your thoughts.  
            Share feedback about our products or online shopping experience.
          </p>
          <div className="flex space-x-4 mb-4">
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <SiTiktok className="hover:text-green-400 cursor-pointer" />
            <FaYoutube className="hover:text-green-400 cursor-pointer" />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 w-full text-white border-amber-50 border-1 rounded-l focus:outline-none"
              />
              <button type="submit" className="border-1 border-amber-50 cursor-pointer text-white px-4 rounded-r">
                →
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">MOM'S</h3>
          <ul className="text-sm space-y-1">
            <li>Our Story</li>
            <li>Reviews</li>
            <li>Franchise</li>
            <li>Careers</li>
            <li>Become a Supplier</li>
            <li>Quality</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">HELP</h3>
          <ul className="text-sm space-y-1">
            <li>FAQ</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">POLICIES</h3>
          <ul className="text-sm space-y-1">
            <li>Membership Agreement</li>
            <li>Return Policy</li>
            <li>Delivery Terms</li>
            <li>Personal Data Protection</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-6 border-t border-gray-600 pt-4">
        &copy;2025 All Rights Reserved - Powered by Ikas E-Commerce Infrastructure.
      </div>
    </footer>
  );
}
