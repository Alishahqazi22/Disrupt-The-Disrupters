import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axiosInstance from "../../Config/axiosInstance";
import Loader from "../Loader";
import AuthContext from "../../context/AuthContext";

const UserProfile = () => {
  const { user, logout, deleteProduct, products } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id && user.id <= 100) {
      axiosInstance.get(`/users/${user.id}`).then((res) => {
        setUserData(res.data);
      });
    } else {
      setUserData(user);
    }
  }, [user]);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setUserData((prev) => ({ ...prev, image: savedImage }));
    }
  }, []);

  if (!userData) return <Loader />;

  const myProducts = user ? products.filter((p) => p.userId === user.id) : [];

  const handleNavigate = () => {
    navigate(-1);
  };
  const profileImage =
  localStorage.getItem(`profileImage_${user?.id}`) ||
  userData?.image ||
  "/placeholder.jpg";

  return (
    <div className="bg-gray-100 p-8 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <span
          onClick={handleNavigate}
          className="text-primary flex items-center gap-1 pb-8 hover:underline"
        >
          <IoIosArrowBack />
          <p>Back</p>
        </span>
        <div className="flex justify-between">
          <div className="flex items-center gap-6 border-b pb-6 mb-6">
            <div className="relative w-28 h-28">
              <img
                src={profileImage}
                alt="profile"
                className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
              />

              <input
                type="file"
                accept="image/*"
                id="profileImageInput"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const newImage = reader.result;
                      localStorage.setItem(`profileImage_${user?.id}`, newImage);
                      setUserData((prev) => ({ ...prev, image: newImage }));
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />

              <label
                htmlFor="profileImageInput"
                className="absolute bottom-2 right-1 bg-blue-500 text-white px-1 rounded-full cursor-pointer shadow-md hover:bg-blue-600"
              >
                ✎
              </label>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {userData?.firstName ? userData.firstName : "N/A"}{" "}
                {userData?.lastName ? userData.lastName : "N/A"}
              </h1>
              <p className="text-gray-600">
                @{userData?.username ? userData.username : "N/A"}
              </p>
              <p className="text-sm text-gray-500">
                Role: {userData?.role ? userData.role : "N/A"}
              </p>
            </div>
          </div>
          <div className="space-x-2">
            <Link to="/addProduct">
              <button className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md">
                Add Product
              </button>
            </Link>
            <button
              onClick={logout}
              className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md"
            >
              Logout
            </button>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3"> My Products</h2>
          {myProducts.length === 0 ? (
            <p className="text-gray-500">You haven't added any products yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {myProducts.map((item) => (
                <div
                  key={item.id}
                  className="border rounded p-3 bg-gray-50 shadow-sm"
                >
                  <Link to={`/editProduct/${item.id}`}>
                    <img
                      src={
                        Array.isArray(item.images)
                          ? item.images[0]
                          : item.images || "/placeholder.jpg"
                      }
                      alt={item.title}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                  </Link>
                  <h3 className="font-semibold overflow-hidden">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/editProduct/${item.id}`)}
                    className="mt-2 px-2 py-1 ml-2 bg-blue-500 text-white rounded text-sm"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3"> Personal Info</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Age:</strong> {userData?.age ? userData.age : "N/A"}
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              {userData?.gender ? userData.gender : "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {userData?.email ? userData.email : "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {userData?.phone ? userData.phone : "N/A"}
            </p>
            <p>
              <strong>Birth Date:</strong>{" "}
              {userData?.birthDate ? userData.birthDate : "N/A"}
            </p>
            <p>
              <strong>Blood Group:</strong>{" "}
              {userData?.bloodGroup ? userData.bloodGroup : "N/A"}
            </p>
            <p>
              <strong>Height:</strong>{" "}
              {userData?.height ? userData.height : "N/A"} cm
            </p>
            <p>
              <strong>Weight:</strong>{" "}
              {userData?.weight ? userData.weight : "N/A"} kg
            </p>
            <p>
              <strong>Eye Color:</strong>{" "}
              {userData?.eyeColor ? userData.eyeColor : "N/A"}
            </p>
            <p>
              <strong>Hair:</strong> {userData?.hair?.color} (
              {userData?.hair?.type ? userData.hair.type : "N/A"})
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3"> Address</h2>
          <p className="text-gray-700">
            {userData?.address?.address ? userData.address.address : "N/A"},{" "}
            {userData?.address?.city ? userData.address.city : "N/A"},{" "}
            {userData?.address?.state ? userData.address.state : "N/A"}{" "}
            {userData?.address?.postalCode
              ? userData.address.postalCode
              : "N/A"}
            , {userData?.address?.country ? userData.address.country : "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            Lat:{" "}
            {userData?.address?.coordinates?.lat
              ? userData.address.coordinates.lat
              : "N/A"}
            , Lng:{" "}
            {userData?.address?.coordinates?.lng
              ? userData.address.coordinates.lng
              : "N/A"}
          </p>
        </section>

        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold mb-3">🏢 Company</h2>
          <p className="text-gray-700 font-medium">
            {userData?.company?.name ? userData.company.name : "N/A"}
          </p>
          <p>
            {userData?.company?.title ? userData.company.title : "N/A"} -{" "}
            {userData?.company?.department
              ? userData.company.department
              : "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            {userData?.company?.address?.address
              ? userData.company.address.address
              : "N/A"}
            ,{" "}
            {userData?.company?.address.city
              ? userData.company.address.city
              : "N/A"}
            ,{" "}
            {userData?.company?.address?.state
              ? userData.company.address.state
              : "N/A"}{" "}
            {userData?.company?.address?.postalCode
              ? userData.company.address.postalCode
              : "N/A"}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3"> Bank Info</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Card Type:</strong>{" "}
              {userData?.bank?.cardType ? userData.bank.cardType : "N/A"}
            </p>
            <p>
              <strong>Card Number:</strong>
              {userData?.bank?.cardNumber ? userData.bank.cardNumber : "N/A"}
            </p>
            <p>
              <strong>Expiry:</strong>{" "}
              {userData?.bank?.cardExpire ? userData.bank.cardExpire : "N/A"}
            </p>
            <p>
              <strong>Currency:</strong>{" "}
              {userData?.bank?.currency ? userData.bank.currency : "N/A"}
            </p>
            <p>
              <strong>IBAN:</strong>{" "}
              {userData?.bank?.iban ? userData.bank.iban : "N/A"}
            </p>
          </div>
        </section>

        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold mb-3"> Crypto</h2>
          <p>
            <strong>Coin:</strong>{" "}
            {userData?.crypto?.coin ? userData.crypto.coin : "N/A"}
          </p>
          <p>
            <strong>Wallet:</strong>{" "}
            {userData?.crypto?.wallet ? userData.crypto.wallet : "N/A"}
          </p>
          <p>
            <strong>Network:</strong>{" "}
            {userData?.crypto?.network ? userData.crypto.network : "N/A"}
          </p>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
