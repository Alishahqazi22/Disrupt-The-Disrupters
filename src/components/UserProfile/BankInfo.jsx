import React from 'react'

function BankInfo({userData}) {
  return (
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
  )
}

export default BankInfo