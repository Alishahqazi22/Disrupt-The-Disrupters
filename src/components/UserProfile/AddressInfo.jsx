import React from "react";

function AddressInfo({ userData, setUserData, isEditing }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3"> Address</h2>

      {isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Enter address"
            value={userData?.address?.address || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, address: e.target.value },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter city"
            value={userData?.address?.city || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, city: e.target.value },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter state"
            value={userData?.address?.state || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, state: e.target.value },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter postal code"
            value={userData?.address?.postalCode || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, postalCode: e.target.value },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter country"
            value={userData?.address?.country || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: { ...userData.address, country: e.target.value },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Latitude"
            value={userData?.address?.coordinates?.lat || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  coordinates: {
                    ...userData.address?.coordinates,
                    lat: e.target.value,
                  },
                },
              })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Longitude"
            value={userData?.address?.coordinates?.lng || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  coordinates: {
                    ...userData.address?.coordinates,
                    lng: e.target.value,
                  },
                },
              })
            }
            className="border p-2 rounded"
          />
        </div>
      ) : (
        <>
          <p className="text-gray-700">
            {userData?.address?.address || "N/A"},{" "}
            {userData?.address?.city || "N/A"},{" "}
            {userData?.address?.state || "N/A"}{" "}
            {userData?.address?.postalCode || "N/A"},{" "}
            {userData?.address?.country || "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            Lat: {userData?.address?.coordinates?.lat || "N/A"}, Lng:{" "}
            {userData?.address?.coordinates?.lng || "N/A"}
          </p>
        </>
      )}
    </section>
  );
}

export default AddressInfo;
