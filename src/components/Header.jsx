import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-200 py-4 px-6 shadow-md fixed w-full h-24 top-0 z-50">
        <div className="">

      <img src="/Jeremy.png" alt="Logo" className="w-16 h-16 " />
        </div>
      <ul className="flex gap-6 text-lg font-medium text-gray-800 ">
      <li>
          <NavLink
            to="/"
            className="hover:text-yellow-300 transition"
          >
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fakestoreapi"
            className="hover:text-yellow-300 transition"
          >
            FakeStoreAPI
          </NavLink>
        </li>
      
        <li>
          <NavLink
            to="/dummyjson"
            className="hover:text-yellow-300 transition"
          >
            DummyJSON
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jsonplaceholder"
            className="hover:text-yellow-300 transition"
          >
            JSONPlaceholder
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Header;
