import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWishList, removeFromWishList } from "../store/WishListSlice";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { mockData } from "./Index";

const FavoritesPage = () => {
  const { products } = useContext(AuthContext);
  const navigate = useNavigate();
  const wishListItems = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();

  const favoriteItems = products.filter((dataItem) =>
    wishListItems.some((wishItem) => wishItem.id === dataItem.id)
  );
  const featuresItems = mockData.filter((dataItem) =>
    wishListItems.some((wishItem) => wishItem.id === dataItem.id)
  );
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="z-10 p-6">
      <span
        onClick={handleNavigate}
        className="text-primary flex items-center gap-1 hover:underline"
      >
        <IoIosArrowBack />
        <p>Back</p>
      </span>
      <h2 className="text-xl font-bold mb-4 pl-5">Wish List</h2>

      {favoriteItems.length === 0 && featuresItems.length === 0 ? (
        <p className="text-center">No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {favoriteItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-3 shadow-sm">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-44 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-sm">{item.title}</h3>

              {item.category === "product" ? (
                <>
                  <p className="text-xs text-gray-600">Price: ${item.price}</p>
                </>
              ) : (
                <>
                  <p className="text-xs text-gray-600">
                    Address: {item.address}
                  </p>
                  <p className="text-xs text-gray-600">Amount: {item.amount}</p>
                </>
              )}

              <button
                onClick={() => dispatch(removeFromWishList(item.id))}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                Remove
              </button>
            </div>
          ))}
          {featuresItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-3 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">Address: {item.address}</p>
              <p className="text-xs text-gray-600">Amount: {item.amount}</p>

              <button
                onClick={() => dispatch(removeFromWishList(item.id))}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
  
      {(favoriteItems.length > 0 || featuresItems.length > 0) && (
        <button
          onClick={() => dispatch(clearWishList())}
          className="mt-6 bg-primary text-white px-4 py-2 rounded"
        >
          Clear Wishlist
        </button>
      )}
    </div>
  );
};

export default FavoritesPage;
