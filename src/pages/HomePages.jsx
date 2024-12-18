import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import TermsAndPolicy from "./TermsandPolicy";

const HomePage = () => {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/jewelery")
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <section id="home" className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white pb-20 px-6">
      <div className="flex items-center justify-between pb-12 pt-4">
<img src="/astral.png" alt="Logo" className="w-28 h-auto"/>
<div className="flex items-center justify-between">
          <ul className="flex gap-8 text-xl font-Montserrat text-white ">
            <li className="hover:text-blue-600"><a href="#home">Home</a></li> 
            <li className="hover:text-blue-600"><a href="#features">Feature</a></li>
            <li className="hover:text-blue-600"><a href="#offer">Sales</a></li>
            <li className="hover:text-blue-600"><a href=""><NavLink to="/products">Shop Now</NavLink></a></li> 
          </ul>
        </div>
        </div>
      
       
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-lg mb-6">
              Explore a wide variety of high-quality products at unbeatable prices. Shop now and elevate your lifestyle.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
              <NavLink to="/products">Shop Now</NavLink>
            </button>
          </div>
          <img
            src="astral1.png"
            alt="Hero"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>



      <section id="offer" className="bg-yellow-400 py-12 px-6 text-center text-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Special Offer: Up to 50% Off!
        </h2>
        <p className="text-lg mb-6">
          Hurry! Limited-time discounts on our best-selling products.
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
          Browse Deals
        </button>
      </section>
    
      <section id="features" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           
            {products.length === 0 ? (
              <p className="text-center text-gray-600">Loading products...</p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transform transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{product.title}</h3>
               
                 
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    

      
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sign Up for Exclusive Deals</h2>
          <p className="text-lg mb-6">
            Join our mailing list and be the first to know about new arrivals and special offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

   
      <footer  className="bg-gray-800 text-gray-300 py-6">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
   
      <div className="text-left mb-4 md:mb-0">
        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
        <p className="mt-2">
          Email: <a href="mailto:support@yourecommerce.com" className=" hover:text-white">jeremycpsu@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890" className=" hover:text-white">+63 970 1061 156</a>
        </p>
        <p>Address: Don Salvador Benedicto, Negros Occidental</p>
      </div>

      <div className="text-left md:text-right">
        <h3 className="text-lg font-semibold text-white">About Our System</h3>
        <p className="mt-2">
          <strong>24/7 customer support</strong>
        </p>
      </div>
    </div>

    <div className="mt-6 text-center border-t border-gray-700 pt-4">
      <NavLink to="/terms" className=" hover:text-white">
        Terms and Policy
      </NavLink>
    </div>
  </div>
</footer>


    </div>
  );
};

export default HomePage;
