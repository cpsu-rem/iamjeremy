import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DummyJSON from '../pages/DummyJSON';
import JSONPlaceholder from '../pages/JSONPlaceholder';


import FakeStoreAPI from '../pages/FakeStoreAPI';
import TermsAndPolicy from "../pages/TermsandPolicy";


function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        

        <Route path="/terms" element={<TermsAndPolicy />} />
        <Route path="/jsonplaceholder" element={<JSONPlaceholder />} />

        <Route path="/dummyjson" element={<DummyJSON />} />

        <Route path="/fakestoreapi" element={<FakeStoreAPI />} />
       
      </Route>
    </Routes>
  );
}

export default Router;
