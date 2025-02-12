import { MessageSquare, Mail, HelpCircle, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">Connectly</h2>
            <p className="mt-4 text-gray-500 max-w-md">
              Empowering connections through innovative communication solutions.
              Join us in shaping the future of digital interactions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#0000ff]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0000ff]">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff] flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff] flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff] flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-[#0000ff]">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-300 pt-8">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} Connectly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}