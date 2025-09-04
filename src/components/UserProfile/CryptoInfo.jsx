import React from 'react'

function CryptoInfo({userData, deleteAccount}) {
  return (
    <section className="mb-6 space-y-2 flex justify-between items-end">
          <div>
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
          </div>
          <div>
            <button
              type="button"
              onClick={deleteAccount}
              className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md"
            >
              Delete Account
            </button>
          </div>
        </section>
  )
}

export default CryptoInfo