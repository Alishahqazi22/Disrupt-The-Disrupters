import React from "react";

function PersonalInfo({ userData, setUserData, isEditing }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3"> Personal Info</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <p>
          <strong>Age:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.age || "Enter your age"}
              value={userData?.age || ""}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.age || "N/A"
          )}
        </p>
        <p>
          <strong>Gender:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.gender || "Enter your gender"}
              value={userData?.gender || ""}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.gender || "N/A"
          )}
        </p>
        <p>
          <strong>Email:</strong> {userData?.email ? userData.email : "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {userData?.phone ? userData.phone : "N/A"}
        </p>
        <p>
          <strong>Birth Date:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.birthDate || "Enter your BirthData"}
              value={userData?.birthDate || ""}
              onChange={(e) =>
                setUserData({ ...userData, birthDate: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.birthDate || "N/A"
          )}
        </p>
        <p>
          <strong>Blood Group:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.bloodGroup || "Enter your bloodGroup"}
              value={userData?.bloodGroup || ""}
              onChange={(e) =>
                setUserData({ ...userData, bloodGroup: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.bloodGroup || "N/A"
          )}
        </p>
        <p>
          <strong>Height:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.height || "Enter your height"}
              value={userData?.height || ""}
              onChange={(e) =>
                setUserData({ ...userData, height: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.height || "N/A"
          )}{" "}
          cm
        </p>
        <p>
          <strong>Weight:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.weight || "Enter your weight"}
              value={userData?.weight || ""}
              onChange={(e) =>
                setUserData({ ...userData, weight: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.weight || "N/A"
          )}{" "}
          kg
        </p>
        <p>
          <strong>Eye Color:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              placeholder={userData?.eyeColor || "Enter your eyeColor"}
              value={userData?.eyeColor || ""}
              onChange={(e) =>
                setUserData({ ...userData, eyeColor: e.target.value })
              }
              className="border p-2 rounded"
            />
          ) : (
            userData?.eyeColor || "N/A"
          )}
        </p>
        <p>
          <strong>Hair:</strong>{" "}
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
               <input
                type="text"
                placeholder="Enter your hair color"
                value={userData?.hair?.color || ""}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    hair: { ...userData.hair, color: e.target.value },
                  })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Enter your hair type"
                value={userData?.hair?.type || ""}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    hair: { ...userData.hair, type: e.target.value },
                  })
                }
                className="border p-2 rounded"
              />
            </div>
          ) : (
            <>
              <p className="text-gray-700">
                {userData?.hair?.color || "N/A"},{" "}
                {userData?.hair?.type || "N/A"}
              </p>
            </>
          )}
        </p>
      </div>
    </section>
  );
}

export default PersonalInfo;
