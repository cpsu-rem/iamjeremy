import {Routes , Route} from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePages from "../pages/HomePages";
import TermsandPolicy from "../pages/TermsandPolicy";
import Products from "../pages/Products";



const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<HomePages />} />
                <Route path="/terms" element={<TermsandPolicy />} />
                <Route path="/products" element={<Products />} />
                
            </Route>
        </Routes>
    )
}

export default Router;
