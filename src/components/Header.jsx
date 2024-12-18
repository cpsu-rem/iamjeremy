import { NavLink } from "react-router";
const Header = () => {
    return (
        <div className="w-full h-24 bg-blue-200 fixed ">
        <div className="flex justify-between items-center m-4 p-4">
            <h1 className="text-black text-3xl font-bold"><img src="/astral.png" alt="logo" />Astral Store</h1>
        <nav>
            <ul className="flex text-black text-2xl gap-4">
            <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
            </ul>
        </nav>
        </div>
        </div>
    )
}

export default Header
