import React, { useContext } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./homeLayouts/MainLayout";
import Ecommerce from "./pages/eCommerce";
import ProductDetails from "./DynamicallyRoute/ProductDetails";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import CartPage from "./context/CartPage";
import FavoritesPage from "./context/FavouritePage";
import AllProducts from "./allProductLayout/AllProducts";
import PropertyDetail from "./DynamicallyRoute/PropertyDetail";
import AuthContext from "./context/AuthContext";
import Loader from "./components/Loader";
import SignUpForm from "./components/Forms/SignUpForm";
import SignInForm from "./components/Forms/SignInForm";
import UserProfile from "./components/UserProfile/UserProfile";
import AddProduct from "./components/Forms/AddProduct";
import EditProduct from "./components/Forms/EditProduct";
import ProductForm from "./components/Forms/ProductForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm";

const theme = {
  colors: {
    btn: "blue",
  },
};

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/eCommerce" element={<Ecommerce />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/favouritepage" element={<FavoritesPage />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productForm" element={<ProductForm />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
        </Route>
        <Route path="/Signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/reset-password-form" element={<ResetPasswordForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
