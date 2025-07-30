import our_banner from "../../assets/images/our-banner.png";
import our1 from "../../assets/images/our1.png";
import LeftSidebar from "../Sections/LeftSidebar";

const About = () => {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* <Header /> */}

      {/* first section */}
      <div
        className="h-[25vh] flex flex-col justify-center items-center font-bold text-white"
        style={{
          backgroundImage: `url(${our_banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-bold text-3xl">Shop</h1>
        <h1 className="">Home/Shope</h1>
      </div>

      {/* second section */}
      <div className="w-full flex">
        {/* left section */}
        <div className="flex flex-col md:flex-row w-[40%] justify-center pt-7">
          <LeftSidebar />
          {/* Your right-side product cards go here */}
        </div>

        {/* right section  */}
        <div className="w-full md:w-[60%] flex flex-wrap justify-center gap-6 p-4">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white border border-gray-200 rounded-lg shadow p-4"
            >
              {/* Product Image */}
              <img
                className="rounded-t-lg w-full h-48 object-contain"
                src={our1}
                alt="Diabetic Care Juice"
              />

              {/* Product Info */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold text-gray-800 leading-tight">
                  Pure 100% Herbal Baby Oil - Nourishing, Non-sticky Baby
                  Massage Oil (100 ml)
                </h5>

                {/* Price Section */}
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-green-600 font-bold text-lg">₹555</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹666
                  </span>
                  <span className="text-red-600 text-sm font-semibold">
                    150% Off
                  </span>
                </div>

                {/* Ratings */}
                <div className="mt-2 flex items-center text-yellow-500 text-sm">
                  <span>★★★★★</span>
                  <span className="text-gray-600 ml-2">(265 ratings)</span>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};

export default About;
