import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthContext from "../../context/AuthContext";
import { FaDollarSign } from "react-icons/fa";
import StarReview from "../Reviewsection/StarReview";

const EditProduct = () => {
  const { id } = useParams();
  const { products, updateProduct, deleteProduct } = useContext(AuthContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  const [formData, setFormData] = useState(product || {});

  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.id, formData);
    // navigate(-1);
  };

  if (!product) return <Loader />;

  return (
    <div className="w-full h-full pb-10">
      {/* Back Button */}
      <div className="pt-4 px-4 sm:px-10">
        <span
          onClick={() => navigate(-1)}
          className="text-primary flex items-center gap-1 hover:underline cursor-pointer"
        >
          <IoIosArrowBack />
          <p>Back</p>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-10 md:px-20 lg:px-40 mt-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b pb-3">{product.title}</h2>

          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {product.images?.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-[350px]"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
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
                className="w-full h-[350px] object-contain"
              />
            )}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-2xl font-bold text-secondary flex items-center">
              <FaDollarSign /> {product.price}
            </p>
            {product.discountPercentage ? (
              <>
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

          {product.description && (
            <p className="text-gray-700">{product.description}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warrantyInformation || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Shipping:</span>{" "}
              {product.shippingInformation || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Return Policy:</span>{" "}
              {product.returnPolicy || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Barcode:</span>{" "}
              {product.meta?.barcode || "N/A"}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
            <div className="space-y-3">
              {product.reviews?.map((review, i) => (
                <div key={i} className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-1">
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
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* <button
                onClick={() => navigate(`/editProduct/${product.id}`)}
                className="px-6 py-3 bg-primary text-white rounded-lg w-full sm:w-1/2"
              >
                Edit
              </button> */}
            <button
              onClick={() => deleteProduct(product.id)}
              className="px-6 py-3 bg-secondary text-white rounded-lg w-full sm:w-1/2 flex items-center justify-center gap-2"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="flex justify-between">
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Image URL</label>
              <input
                type="text"
                name="images"
                value={formData.images?.join(", ") || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: e.target.value.split(",").map((img) => img.trim()),
                  })
                }
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter image URLs separated by commas"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
