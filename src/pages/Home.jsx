
import { NavLink } from "react-router";

const HomePage = () => {
 

  return (
    <div className="bg-gray-50 text-gray-800 pt-24">
  <section
  id="home"
  className="relative bg-cover bg-center text-white pb-20 px-6 h-[600px]"
  style={{ backgroundImage: 'url(https://digitalcxo.com/wp-content/uploads/2022/03/APIadoption-1.jpg)' }} 
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-start h-full">
    <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
  Explore a World of Test APIs
</h1>
<p className="text-lg mb-6">
  Discover a diverse collection of APIs designed for testing and experimentation.
</p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
        Explore
      </button>
    </div>
  </div>
</section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Subscribe to Access Exclusive APIs
          </h2>
          <p className="text-lg mb-6">
            Join our mailing list and be the first to know about new free API that I created.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-red-100 hover:text-black transition">
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
          Phone: <a href="tel:+1234567890" className=" hover:text-white">+63 912 2356 539</a>
        </p>
        <p>Address: Don Salvador Benedicto, Negros Occidental</p>
      </div>

      <div className="text-left md:text-right">
        <h3 className="text-lg font-semibold text-white">About my System</h3>
        <p className="mt-2">
          <strong>Customer support</strong>
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
