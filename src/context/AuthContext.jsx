import { createContext, useEffect, useState } from "react";
import axiosInstance from "../Config/axiosInstance";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
import { useDispatch } from "react-redux";
import { clearCart, setUserId as setCartUserId } from "../store/cartSlice";
import {
  clearWishList,
  setUserId as setWishListUserId,
} from "../store/WishListSlice";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const productRes = await axiosInstance.get("/products");
      setProducts(productRes.data.products);
    } catch (err) {
      console.error("Fetch products error:", err);
    }
  };

  const addProduct = (newProduct) => {
    if (!user) return;
    const productWithUser = {
      ...newProduct,
      id: Date.now(),
      userId: user.id,
      images: Array.isArray(newProduct.images)
        ? newProduct.images
        : newProduct.images
        ? [newProduct.images]
        : ["/placeholder.jpg"],
      reviews: [],
    };
    setProducts((prev) => [...prev, productWithUser]);
  };

  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateProduct = (productId, updatedData) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId
          ? {
              ...p,
              ...updatedData,
              images: Array.isArray(updatedData.images)
                ? updatedData.images
                : updatedData.images
                ? [updatedData.images]
                : p.images,
            }
          : p
      )
    );
  };

  const login = async (formData) => {
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      const loggedInUser = {
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        token: res.data.token,
      };
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      dispatch(setCartUserId(loggedInUser.id));
      dispatch(setWishListUserId(loggedInUser.id));

      return loggedInUser;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    dispatch(clearCart());
    dispatch(clearWishList());
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setUser(JSON.parse(token));
    }
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      fetchProducts();
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (user?.id) {
      dispatch(setCartUserId(user.id));
      dispatch(setWishListUserId(user.id)); 
    }
  }, [user, dispatch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        products,
        loading,
        login,
        logout,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
