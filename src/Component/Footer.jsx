import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo and About */}
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold mb-2">
            <span className="text-rose-600">AI</span> MODEL STORE
          </h1>
          <p className="text-sm text-white/80">
            Manage and explore AI models easily from a single platform.  
            Designed to simplify your AI workflow.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                alt="X (Twitter)"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3">
          <h2 className="font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">
            <a
              href="mailto:tusharmamun345@gmail.com"
              className="hover:underline"
            >
              tusharmamun345@gmail.com
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+8801700000000" className="hover:underline">
              +880 1700-000000
            </a>
          </p>
          <p className="text-sm">
            Mirpur, Dhaka, Bangladesh
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/news" className="hover:underline">News</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/plans-and-pricing" className="hover:underline">Plans & Pricing</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center text-xs text-white/70">
        © 2025 AI MODEL STORE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;