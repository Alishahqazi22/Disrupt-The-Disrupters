import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { IoIosArrowBack } from "react-icons/io";

const ProductForm = ({ mode = "add", initialData }) => {
  const navigate = useNavigate();
  const { addProduct, updateProduct } = useContext(AuthContext);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    description: Yup.string().required("Description required"),
    price: Yup.number().required("Price required").positive(),
    discount: Yup.number().min(0).max(100),
    stock: Yup.number().required("Stock required").min(1),
    brand: Yup.string().required("Brand required"),
    category: Yup.string().required("Category required"),
    status: Yup.string().required("Status required"),
  });

  const initialValues = initialData || {
    title: "",
    description: "",
    price: "",
    discount: 0,
    stock: "",
    brand: "",
    category: "",
    tags: "",
    warranty: "",
    returnPolicy: "",
    shipping: "",
    images: [],
    status: "active",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      if (mode === "add") {
        addProduct({
          ...values,
          reviews: [],
          meta: { barcode: "N/A", createdAt: new Date().toISOString() },
        });
      } else {
        updateProduct(values.id, values); 
      }
      resetForm();
      navigate("/allProducts");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <span
        onClick={() => navigate(-1)}
        className="text-primary flex items-center gap-1 p-3 hover:underline"
      >
        <IoIosArrowBack />
        <p>Back</p>
      </span>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {mode === "add" ? "Add New Product" : "Update Product"}
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue, values }) => (
            <Form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <Field
                  name="title"
                  type="text"
                  placeholder="Product title"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Product description"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Price ($)</label>
                  <Field
                    name="price"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <ErrorMessage name="price" component="p" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Discount (%)</label>
                  <Field
                    name="discount"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Stock</label>
                <Field
                  name="stock"
                  type="number"
                  placeholder="Available quantity"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Brand</label>
                <Field
                  name="brand"
                  type="text"
                  placeholder="Brand name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Category</label>
                <Field
                  as="select"
                  name="category"
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">-- Select --</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="skincare">Beauty</option>
                  <option value="groceries">Groceries</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothes">Clothes</option>
                </Field>
              </div>

              <div>
                <label className="block mb-1 font-medium">Tags</label>
                <Field
                  name="tags"
                  type="text"
                  placeholder="comma separated tags"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Warranty</label>
                <Field
                  name="warranty"
                  type="text"
                  placeholder="e.g. 1 year"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Return Policy</label>
                <Field
                  name="returnPolicy"
                  type="text"
                  placeholder="e.g. 7 days return"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Shipping</label>
                <Field
                  name="shipping"
                  type="text"
                  placeholder="e.g. Free shipping"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Upload Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) =>
                    setFieldValue("images", Array.from(e.currentTarget.files))
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {values.images?.length > 0 && (
                  <p className="text-sm text-gray-500">
                    {values.images.length} file(s) selected
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Status</label>
                <Field as="select" name="status" className="w-full px-4 py-2 border rounded-lg">
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                </Field>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                {mode === "add" ? "Add Product" : "Update Product"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProductForm;
