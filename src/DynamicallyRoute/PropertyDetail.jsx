import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "../context/Index";
import { FaMapMarkerAlt, FaDollarSign, FaHome, FaArrowLeft } from "react-icons/fa";
// import ContactSellerForm from "../pages/ContactSellerForm";

function PropertyDetail() {
  const { id } = useParams();
  const property = mockData.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!property) return <p className="text-center mt-10 text-red-500">Property not found</p>;

  return (
    <div className="z-10 max-w-6xl mx-auto px-4 py-8">
      <button
       onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline mb-6"
      >
        <FaArrowLeft /> Back to Listings
      </button>

      <div className="w-full h-80 sm:h-96 md:h-[28rem] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {property.title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-green-600 flex items-center gap-1 mt-2 md:mt-0">
            <FaDollarSign /> {property.amount}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300">
          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
            <FaMapMarkerAlt /> {property.address || "Unknown Location"}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
            <FaHome /> {property.type || "Apartment"}
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
            {property.Sqfeet ? `${property.Sqfeet} sq ft` : "Size not specified"}
          </span>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {property.description ||
              "No detailed description provided for this property."}
          </p>
        </div>

        {property.features && property.features.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300">
              {property.features.map((feature, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
                >
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4">
          <button
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
