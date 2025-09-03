import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaDollarSign, FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import StarReview from "../components/Reviewsection/StarReview";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { CiHeart } from "react-icons/ci";
import AuthContext from "../context/AuthContext";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toggleWishList } from "../store/WishListSlice";

function ProductDetails() {
  const navigate = useNavigate();
  const { category, id } = useParams();
  const { products, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.items);
  const cartItems = useSelector((state) => state.cart.items);

  const productList = products.filter((item) => item.category === category);
  const product = productList.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const productId = `${category}-${id}`;
  const alreadyInCart = cartItems.some((item) => item.id === productId);

  const handleAddToCart = () => {
    if (!user) {
      const proceedToLogin = window.confirm(
        "You need to login to add this product to cart. Click OK to login or Cancel to stay."
      );

      if (proceedToLogin) {
        navigate("/signin");
      } else {
        return;
      }
      return;
    }
    if (alreadyInCart) {
      navigate("/cartPage");
      return;
    }
    dispatch(
      addToCart({
        id: productId,
        title: product.title,
        price: product.price,
        image: product.images,
        quantity: 1,
      })
    );
  };

  const isInWishList = (id) => {
    return wishListItems.some((items) => items.id === id);
  };

  const handleHeartClick = (item) => {
    if (!user) {
      const proceedToLogin = window.confirm(
        "You need to login to add this product to wishlist. Click OK to login or Cancel to stay."
      );
  
      if (proceedToLogin) {
        navigate("/signin");
      }
      return;
    }
    dispatch(toggleWishList(item));
  };
  
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full pb-10">
      <div className="pt-4 px-4 sm:px-10">
        <span
          onClick={handleNavigate}
          className="text-primary flex items-center gap-1 hover:underline"
        >
          <IoIosArrowBack />
          <p>Back</p>
        </span>
      </div>

      <div className="px-4 sm:px-10 md:px-20 lg:px-40 mt-4 border-b">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold pb-4">
          {product.title}
        </h2>
      </div>

      <div className="px-4 sm:px-10 md:px-20 lg:px-40 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          {product.images.length > 1 ? (
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-[400px] sm:h-[500px]"
            >
              {product.images.map((img, i) => (
                <SwiperSlide key={product.id ? `${product.id}-${i}` : i}>
                  {" "}
                  <img
                    src={img}
                    alt={`${product.title}-${i}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-[400px] sm:h-[500px] object-contain"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-2xl font-bold text-secondary flex items-center">
                <FaDollarSign /> {product.price}
              </p>
              {product.discountPercentage ? (
                <>
                  {" "}
                  <p className="text-gray-500 line-through">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                  <span className="bg-secondary text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    -{product.discountPercentage}%
                  </span>
                </>
              ) : null}
            </div>
          </div>

          {product.description ? (
            <p className="text-gray-700">{product.description}</p>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand ? product.brand : "N/A"}
            </p>
            <p>
              <span className="font-semibold">SKU:</span>{" "}
              {product.sku ? product.sku : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Weight:</span>
              {product.weight ? "g" : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock ? product.stock : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warrantyInformation
                ? product.warrantyInformation
                : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Shipping:</span>{" "}
              {product.shippingInformation
                ? product.shippingInformation
                : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {product.availabilityStatus ? product.availabilityStatus : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Return Policy:</span>{" "}
              {product.returnPolicy ? product.returnPolicy : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Min Order:</span>{" "}
              {product.minimumOrderQuantity
                ? product.minimumOrderQuantity
                : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Barcode:</span>{" "}
              {product.meta.barcode || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {product.meta?.createdAt
                ? new Date(product.meta.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-primary text-white rounded-lg w-full sm:w-1/2"
            >
              {alreadyInCart ? <p>View in Cart</p> : "Add to Cart"}
            </button>
            <button
              onClick={() => handleHeartClick(product)}
              className="px-6 py-3 bg-secondary text-white rounded-lg w-full sm:w-1/2 flex items-center justify-center gap-2"
            >
              {isInWishList(product.id) ? (
                <>
                  <FaHeart className="text-red-500" /> Added to Wishlist
                </>
              ) : (
                <>
                  <CiHeart /> Add to Wishlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10 md:px-20 lg:px-40 mt-12">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">
                  {Array.isArray(product.reviews) ? product.reviews.length : 0}{" "}
                  reviews
                </p>
                <StarReview stars={review.rating || 0} />
              </div>
              <p className="text-gray-700 italic">"{review.comment}"</p>
              <p className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
