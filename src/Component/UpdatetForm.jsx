import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const UpdateForm = () => {
  const InfoUpdate = useLoaderData();
  const navigate = useNavigate();

  // Initialize form with existing data
  const [formData, setFormData] = useState({
    name: InfoUpdate.name || "",
    framework: InfoUpdate.framework || "",
    useCase: InfoUpdate.useCase || "",
    dataset: InfoUpdate.dataset || "",
    description: InfoUpdate.description || "",
    image: InfoUpdate.image || "",
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit update request
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/models/${InfoUpdate._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Updated Successfully:", data);
        alert("Model updated successfully!");
   navigate(`/modelDetails/${InfoUpdate._id}`);
      })
      .catch((error) => console.error("❌ Error updating model:", error));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Update AI Model
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Model Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Framework */}
        <div>
          <label className="block font-medium mb-1">Framework</label>
          <select
            name="framework"
            value={formData.framework}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select Framework
            </option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="PyTorch">PyTorch</option>
            <option value="Keras">Keras</option>
            <option value="HuggingFace Transformers">
              HuggingFace Transformers
            </option>
            <option value="Scikit-learn">Scikit-learn</option>
          </select>
        </div>

        {/* Use Case */}
        <div>
          <label className="block font-medium mb-1">Use Case</label>
          <input
            type="text"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Dataset */}
        <div>
          <label className="block font-medium mb-1">Dataset</label>
          <input
            type="text"
            name="dataset"
            value={formData.dataset}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
        >
          Update Model
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
