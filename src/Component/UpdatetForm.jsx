import React, { useState, useEffect, use } from "react";
import { useNavigate, useParams } from "react-router";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/Authcontext";

const UpdateForm = () => {
  const { user } = use(AuthContext)
  const navigate = useNavigate();
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: "",
  });

  // Fetch model details
  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`http://localhost:3000/models/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch model details");
        return res.json();
      })
      .then((data) => {
        setDetailsData(data);
        console.log(data)
        setFormData({
          name: data.name || "",
          framework: data.framework || "",
          useCase: data.useCase || "",
          dataset: data.dataset || "",
          description: data.description || "",
          image: data.image || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load model details!");
        setLoading(false);
      });
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Update Model?",
      text: "Are you sure you want to update this model?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user?.accessToken}`,
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success || data.modifiedCount >= 0) {
              toast.success("Model updated successfully!");
       navigate(`/modelDetails/${id}`);
            } else {
              toast.error("Failed to update model!");
            }
          })
          .catch((err) => {
            console.error(err);
            toast.error("Server error while updating!");
          });
      }
    });
  };
    if (!detailsData) {
    return <div className="text-center py-20 text-red-600">No data found.</div>;
  }
  if (loading) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }



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
