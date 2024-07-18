import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home/Homepage";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Product/Products";
import ProductInfo from "../Pages/ProductInfo/ProductInfo";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/"
                element={
                    <Homepage />
                } />
            <Route path="/cart"
                element={
                    <Cart />
                } />
            <Route path="/products"
                element={
                    <Products />
                } />
            <Route path="/ProductInfo/:id"
                element={
                    <ProductInfo />
                } />
             <Route path="/SignUp"
                element={
                    <SignUp />
                } />
                  <Route path="/SignIn"
                element={
                    <SignIn />
                } />
        </Routes>
    );
}

export default MainRoutes;