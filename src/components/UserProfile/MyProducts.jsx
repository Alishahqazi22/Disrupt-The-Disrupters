import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MyProducts({myProducts, deleteProduct}) {
    const navigate = useNavigate();
  return (
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
                    type="button"
                    onClick={() => deleteProduct(item.id)}
                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
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
  )
}

export default MyProducts