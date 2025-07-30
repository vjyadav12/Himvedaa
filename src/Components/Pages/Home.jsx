import Header from "../Sections/Header";
import banner1 from "../../assets/images/banner1.png";
import praice from "../../assets/images/praice.png";
import protct from "../../assets/images/protct.png";
import imgProdct1 from "../../assets/images/img-prodct1.png";
import imgProdct2 from "../../assets/images/img-prodct2.png";
import h5_bg2 from "../../assets/images/h5_bg2.jpg";
import late1 from "../../assets/images/late1.png";
import late2 from "../../assets/images/late2.png";
import late3 from "../../assets/images/late3.png";
import late4 from "../../assets/images/late4.png";
import about1 from "../../assets/images/about1.png";
import about3 from "../../assets/images/about3.png";
// import finallogo from "../../assets/final logo.png.png";
// import logo from "../../assets/final logo.png";

import pest from "../../assets/images/pest.png";
import testiUse from "../../assets/images/testi-use.png";
import testimonials from "../../assets/images/testimonials.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaFileArrowUp } from "react-icons/fa6";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}

      {/* first Section */}
      <div
        className="h-[80vh] md:h-[60vh] bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="flex flex-col justify-center items-center gap-6 border border-white/30 px-6 md:px-[120px] py-[80px] backdrop-blur-sm bg-white/10 rounded-lg text-center">
          {/* Headings */}
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-snug">
            Ecocert Certified <br />
            Organic & Natural
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg font-semibold">
            Environment friendly & sustainable
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <button className="bg-green-600 text-white px-6 py-2 skew-x-[-12deg] hover:opacity-90">
              <span className="inline-block skew-x-[12deg]">View all</span>
            </button>
            <button className="bg-[#6B2D25] text-white px-6 py-2 skew-x-[-12deg] hover:opacity-90">
              <span className="inline-block skew-x-[12deg]">Shop Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Second div new launch  */}
      <div class="flex flex-wrap justify-center items-start gap-6 p-6 bg-white">
        {/* <!-- Left Section --> */}
        <div class="w-full md:w-[200px] text-center">
          <h2 class="text-lg font-bold text-red-900">New Launch</h2>
          <p class="text-sm mt-2 mb-4 text-gray-700">
            Explore our latest launch, a carefully made collection of herbal
            treasures designed as per requests made by you to Nanaji.
          </p>
          <button class="bg-green-700 cursor-pointer text-white px-4 py-1 rounded hover:bg-green-800 text-sm">
            View all
          </button>
        </div>

        {/* <!-- Product Card 1 --> */}
        <div class="w-[250px] border rounded shadow hover:shadow-lg relative">
          <span class="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
            Save ₹100.00
          </span>
          <div class="p-4 flex flex-col items-center text-center">
            <img src={protct} alt="product" class="h-32 mb-2 object-contain" />
            <h3 class="font-medium text-sm">Rice Water for Hair and Skin</h3>
            <p class="text-xs text-gray-600 mt-1 mb-2">
              The power of grain for your hair health gain.
            </p>
            <div class="flex items-center justify-center gap-2 text-sm mb-3">
              <span class="line-through text-gray-400">₹499.00</span>
              <span class="font-semibold text-black">₹399.00</span>
              <span class="text-green-700 text-xs font-bold">20% OFF</span>
            </div>
            <button class="bg-red-900 text-white w-full py-1 cursor-pointer rounded hover:bg-red-950 text-sm">
              Add To Cart
            </button>
          </div>
        </div>

        {/* <!-- Product Card 2 --> */}
        <div class="w-[250px] border rounded shadow hover:shadow-lg relative">
          <span class="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
            Save ₹100.00
          </span>
          <div class="p-4 flex flex-col items-center text-center">
            <img src={protct} alt="product" class="h-32 mb-2 object-contain" />
            <h3 class="font-medium text-sm">Rice Water for Hair and Skin</h3>
            <p class="text-xs text-gray-600 mt-1 mb-2">
              The power of grain for your hair health gain.
            </p>
            <div class="flex items-center justify-center gap-2 text-sm mb-3">
              <span class="line-through text-gray-400">₹499.00</span>
              <span class="font-semibold text-black">₹399.00</span>
              <span class="text-green-700 text-xs font-bold">20% OFF</span>
            </div>
            <button class="bg-red-900 text-white w-full py-1 cursor-pointer rounded hover:bg-red-950 text-sm">
              Add To Cart
            </button>
          </div>
        </div>

        {/* <!-- Product Card 3 (with crop for demonstration) --> */}
        <div class="w-[250px] border rounded shadow hover:shadow-lg relative">
          <span class="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
            Save ₹100.00
          </span>
          <div class="p-4 flex flex-col items-center text-center">
            <img src={protct} alt="product" class="h-32 mb-2 object-contain" />
            <h3 class="font-medium text-sm">Rice Water for Hair and Skin</h3>
            <p class="text-xs text-gray-600 mt-1 mb-2">
              The power of grain for your hair health gain.
            </p>
            <div class="flex items-center justify-center gap-2 text-sm mb-3">
              <span class="line-through text-gray-400">₹499.00</span>
              <span class="font-semibold text-black">₹399.00</span>
              <span class="text-green-700 text-xs font-bold">20% OFF</span>
            </div>
            <button class="bg-red-900 text-white w-full py-1 cursor-pointer rounded hover:bg-red-950 text-sm">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* second Section Deal of the END */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full bg-blue-200">
        {/* left section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
          <img className="w-full max-w-md" src={praice} alt="image" />
        </div>

        {/* right section */}
        <div className="flex justify-center items-center w-full px-4 py-10">
          <div className="flex flex-col justify-center items-center bg-amber-50 p-8 md:p-20 rounded-lg shadow-md max-w-2xl w-full">
            {/* Title */}
            <h4 className="text-lg font-medium text-gray-600 mb-2">
              Nature & Organic Shampoo
            </h4>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#7b342d" }}
            >
              DEALS OF THE DAY
            </h1>

            {/* Price */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="line-through text-gray-500 text-lg">$99.99</span>
              <span className="text-3xl font-semibold text-green-600">
                $95.99
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-center mb-1">
              Lorem ipsum dolor sit amet?
            </p>
            <p className="text-gray-600 text-center mb-6 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit placeat a doloremque?
            </p>

            {/* Countdown */}
            <div className="flex gap-4 justify-center items-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center px-2"
                >
                  <span className="font-bold text-2xl text-gray-800">30</span>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[180px]">
        <h2 className="text-center font-bold mb-10 text-3xl text-[#7b342d]">
          Our Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg shadow-sm overflow-hidden flex flex-col items-center relative bg-white"
            >
              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Save ₹100.00
              </span>

              <img
                src={protct}
                alt="Product"
                className="w-24 sm:w-28 md:w-32 mt-6 sm:mt-8"
              />

              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  Rice Water for Hair and Skin
                </h3>
                <p className="text-xs text-gray-500 my-2">
                  The power of grain for your hair health gain.
                </p>

                <div className="flex justify-center items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    ₹499.00
                  </span>
                  <span className="text-green-600 font-bold">₹399.00</span>
                  <span className="text-white bg-green-600 text-xs px-2 py-0.5 rounded">
                    20% OFF
                  </span>
                </div>
              </div>

              <button className="bg-[#4A1D1F] text-white w-full py-2 text-sm hover:bg-[#6a2a2d] transition">
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            View all
          </button>
        </div>
      </div>

      {/* fifth section Two images  */}
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-[180px] py-10 gap-6 w-full">
        <div className="w-full lg:w-1/2">
          <img
            src={imgProdct1}
            alt="img"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={imgProdct2}
            alt="img"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* sixth section High-Quality Teas & Botanicals */}
      <div
        className="w-full h-full py-20 sm:py-28 md:py-36 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${h5_bg2})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-8">
          {/* Left: Product Images (You can add content here) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* Add your image or component here */}
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4a2511] mb-4">
              High-Quality Teas & Botanicals
            </h2>
            <p className="text-sm sm:text-base text-[#5c5c5c] mb-6 px-2 md:px-0">
              Save 25% sitewide on beautifully packaged gift sets, tea
              collections, and exquisite accessories Moms adore.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-all duration-300">
              View all
            </button>
          </div>
        </div>
      </div>

      {/* seventh section Latest News & Recipes */}
      <div className="py-16 px-4 md:px-8 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#4a2511] mb-10">
          Latest News & Recipes
        </h2>

        <div className="px-4 sm:px-8 md:px-16 lg:px-[160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late1} alt="Tea 1" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                read more &gt;
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late2} alt="Tea 2" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                read more &gt;
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late3} alt="Tea 3" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                read more &gt;
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late4} alt="Tea 4" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                read more &gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* eighth section The Ultimate Tea Experience */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full pb-[60px] px-4 md:px-0">
        {/* Left Image Column - Hidden on small screens */}
        <div className="hidden md:flex flex-col w-[30%] justify-center items-center">
          <img src={about1} alt="" />
          <img src={about3} alt="" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col w-full md:w-[40%] justify-center items-center gap-6">
          <h1 className="font-bold text-3xl md:text-4xl text-[#7b342d] text-center">
            The Ultimate Tea Experience
          </h1>

          <p className="text-center text-sm md:text-base px-2 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
            animi quaerat, et, minima excepturi dolore quam deleniti officiis
            recusandae non vel eligendi harum officia ipsa deserunt fugit. Id
            quibusdam possimus optio deleniti aperiam labore consequatur neque
            voluptate, recusandae explicabo dolorum officia asperiores in
            quisquam qui odit, cumque minus repellendus voluptatum magni sunt
            nihil? Facilis, obcaecati.
          </p>

          <button className="p-2 rounded-xl bg-green-500 text-white hover:bg-green-700">
            Learn More
          </button>
        </div>

        {/* Right Image Column - Hidden on small screens */}
        <div className="hidden md:flex flex-col w-[30%] justify-center items-center">
          <img src={about3} alt="" />
          <img src={about1} alt="" />
        </div>
      </div>

      {/* ninth section Want To Stay Healthy Drint Matcha Best Flavour Of Out Tea */}
      <div className="flex flex-col md:flex-row py-[60px] px-4 md:px-[100px] w-full items-center justify-center gap-10">
        {/* Left section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h1
            className="font-bold text-3xl md:text-4xl"
            style={{ color: "#7b342d" }}
          >
            Want To Stay Healthy Drink Matcha – Best Flavour Of Our Tea
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti similique facilis officiis quaerat modi quibusdam,
            consequuntur doloribus voluptatum.
          </p>
          <button className="p-2 rounded-xl bg-green-500 text-white hover:bg-green-700 w-fit mx-auto md:mx-0">
            Learn More
          </button>
        </div>

        {/* Right section - YouTube video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-video max-w-[560px]">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/xLRU0pX1zsg?si=pjuzMSFlI56dPlAz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* tenth section Tea Is One Of the Most Popular Drinks In the World*/}
      <div className="flex flex-col md:flex-row py-[60px] px-4 md:px-[100px] w-full items-center justify-center gap-10">
        {/* Left section - Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={pest}
            alt="Tea Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right section - Text */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-red-700">
            Tea Is One Of the Most Popular Drinks In the World
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti similique facilis officiis quaerat modi quibusdam,
            consequuntur doloribus voluptatum.
          </p>
        </div>
      </div>

      {/* eleventh section Testimonials */}
      <div
        className=" flex justify-center items-center flex-col w-full gap-5 text-white font-semibold py-[60px] "
        style={{
          backgroundImage: `url(${testimonials})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-2xl text-green-600">Testimonials</h1>

        <img
          src={testiUse}
          alt="userImage"
          className="rounded-full border-5 border-green-700"
        />
        <p>Patricia James TOp Manager</p>
        <p className="w-[60%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa
          architecto qui earum eveniet aperiam, quas quisquam, quia hic a
          nesciunt impedit voluptas debitis eligendi! Debitis repellendus
          delectus amet ut. Nihil harum exercitationem totam amet velit, officia
          explicabo.
        </p>

        <h1 className="text-2xl font-bold">⭐⭐⭐⭐⭐</h1>

        <h1 className="text-2xl font-bold">📀📀📀</h1>
      </div>

      {/* twelfth section icons*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {/* Card 1 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-2xl hover:shadow-green-700 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl p-6 transition duration-300 transform hover:scale-105"
        >
          <FaShoppingCart className="text-4xl text-green-700" />
          <p className="text-lg font-semibold text-gray-700">Free Shipping</p>
        </div>

        {/* Card 2 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-2xl hover:shadow-green-700 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl p-6 transition duration-300 transform hover:scale-105"
        >
          <FaFileArrowUp className="text-4xl text-blue-700" />
          <p>Hand Packed</p>
        </div>

        {/* Card 3 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-2xl hover:shadow-green-700 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl p-6 transition duration-300 transform hover:scale-105"
        >
          <MdSecurity className="text-4xl text-red-600" />
          <p>Secured Payment</p>
        </div>

        {/* Card 4 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-2xl hover:shadow-green-700 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl p-6 transition duration-300 transform hover:scale-105"
        >
          <FaCheckCircle className="text-4xl text-green-400" />
          <p>Quality Guarantee</p>
        </div>

        {/* Card 5 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-2xl hover:shadow-green-700 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl p-6 transition duration-300 transform hover:scale-105"
        >
          <RiCustomerServiceFill className="text-4xl text-blue-700" />
          <p>Customer Services</p>
        </div>
      </div>

      {/* 13th section Join The Tea Club */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6 py-[40px] px-4">
  {/* Left Section */}
  <div className="flex flex-col justify-center items-center text-center lg:text-left">
    <h2 className="text-2xl text-red-700 font-bold">Join The Tea Club</h2>
    <p className="font-semibold text-gray-600 max-w-md">
      You will receive a FREE STAMP and 10% discount for your next purchase
    </p>
  </div>

  {/* Right Section */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
    <input
      type="text"
      placeholder="Your email address"
      className="p-2 border border-gray-400 w-full sm:w-auto"
    />
    <button className="p-2 bg-green-600 text-white hover:bg-green-800 border-gray-400 border">
      Subscribe
    </button>
  </div>
</div>

    </>
  );
};

export default Home;
