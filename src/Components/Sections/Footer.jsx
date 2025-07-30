
import logo from "../../assets/final logo.png";

const Footer = () => {
  return (
    <>
      {/* footer section 14th section */}
      <div className="flex flex-col justify-center items-center p-[40px] bg-blue-200">
        <img className="h-[120px]" src={logo} alt="" />

        <hr className="border-t-2 border-gray-400 my-4 w-[96%]" />

        {/* footer links */}
        <div class="bg-green-100 w-[95%] p-8">
          <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800 text-sm">
            {/* <!-- About --> */}
            <div>
              <h3 class="font-bold text-xl mb-2">About</h3>
              <ul class="space-y-1">
                <li>
                  <a href="#" class="hover:underline">
                    » Company
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Quality
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Shop --> */}
            <div>
              <h3 class="font-bold text-xl mb-2">Shop</h3>
              <ul class="space-y-1">
                <li>
                  <a href="#" class="hover:underline">
                    » Loose Leaf Tea
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Green Teas
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Packaged Teas
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Teaware
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Tea Gifts
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Iced Tea
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Help Center --> */}
            <div>
              <h3 class="mb-2 font-bold text-xl">Help Center</h3>
              <ul class="space-y-1">
                <li>
                  <a href="#" class="hover:underline">
                    » Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Privacy Notice
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » Shopping
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    » FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Get in Touch --> */}
            <div>
              <h3 class="font-bold text-xl mb-2">Get in Touch</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="mr-2">📍</span>
                  <span>123 Street, New York, USA</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">📞</span>
                  <span>+012 345 67890</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">✉️</span>
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-400 my-4 w-[96%]" />
        <div className="flex justify-center items-center font-bold">
          <h1>Your Site Name Alll Right Reserved. Designed</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
