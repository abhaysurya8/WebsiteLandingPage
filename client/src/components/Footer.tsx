export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-rigot text-2xl mb-4 font-bold">aakaara</h3>
            <p className="font-quicksand text-gray-300 text-lg mb-6 max-w-md">
              Creating exceptional digital experiences that connect brands with their audiences.
            </p>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-quicksand font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-quicksand text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-quicksand text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="font-quicksand text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="font-quicksand text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-quicksand font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="font-quicksand">hello@aakaara.com</p>
              <p className="font-quicksand">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-quicksand text-gray-400">
            © 2024 aakaara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
