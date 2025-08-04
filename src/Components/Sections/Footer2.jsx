import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../assets/final logo.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Left section with logo and text */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div>
               <img className="h-[60px]" src={logo} alt="" />
              </div>
              
            </div>
            <p className="text-sm leading-relaxed">
              Graphy empowers teams to transform raw data into clear, compelling
              visuals — making insights easier to share, understand, and act on.
            </p>
            <div className="flex gap-4 mt-5">
              {[FaXTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full bg-white  hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2">
                {["Foundation", "Face", "Body", "hair Care","Herbal Products","Our Combos"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2">
                {["Documentation", "Tutorials", "Blog", "Support"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Partners"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <span>© 2025 Graphy. All rights reserved.</span>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
