import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axiosInstance from "../../Config/axiosInstance";
import Loader from "../Loader";
import AuthContext from "../../context/AuthContext";
import AddressInfo from "./AddressInfo";
import PersonalInfo from "./PersonalInfo";
import CompanyInfo from "./CompanyInfo";
import BankInfo from "./BankInfo";
import CryptoInfo from "./CryptoInfo";
import MyProducts from "./MyProducts";

const UserProfile = () => {
  const { user, logout, deleteProduct, products, deleteAccount, updateUser } =
    useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
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
    if (user?.id) {
      const savedImage = localStorage.getItem("profileImage");
      if (savedImage) {
        setUserData((prev) => ({ ...prev, image: savedImage }));
      }
    }
  }, [user.id]);

  if (!userData) return <Loader />;

  const myProducts = user ? products.filter((p) => p.userId === user.id) : [];

  const handleNavigate = () => {
    navigate(-1);
  };
  const profileImage =
    localStorage.getItem(`profileImage_${user?.id}`) ||
    userData?.image ||
    "/placeholder.jpg";

  const handlesave = () => {
    updateUser(userData);
    setIsEditing(false);
  };

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
                      localStorage.setItem(
                        `profileImage_${user?.id}`,
                        newImage
                      );
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
              <div>
                {isEditing ? (
                  <div className="space-x-2">
                    <button
                      type="button"
                      onClick={handlesave}
                      className="px-3 py-1 bg-primary text-white rounded-md"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsEditing(false);
                      }}
                      className="px-3 py-1 bg-secondary text-white rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1 bg-secondary text-white rounded-md"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <Link to="/addProduct">
              <button className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md">
                Add Product
              </button>
            </Link>
            <button
              type="button"
              onClick={logout}
              className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md"
            >
              Logout
            </button>
          </div>
        </div>

        <MyProducts myProducts={myProducts} deleteProduct={deleteProduct}/>

        <PersonalInfo userData={userData} setUserData={setUserData} isEditing={isEditing} />

        <AddressInfo userData={userData} setUserData={setUserData} isEditing={isEditing}/>

        <CompanyInfo userData={userData} setUserData={setUserData} isEditing={isEditing}/>

       <BankInfo userData={userData} setUserData={setUserData} isEditing={isEditing}/>

        <CryptoInfo userData={userData} setUserData={setUserData} isEditing={isEditing} deleteAccount={deleteAccount}/>
      </div>
    </div>
  );
};

export default UserProfile;
