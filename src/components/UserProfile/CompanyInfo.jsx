import React from 'react'

function CompanyInfo({userData}) {
  return (
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
  )
}

export default CompanyInfo