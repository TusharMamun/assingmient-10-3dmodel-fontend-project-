import React, { use, useState } from 'react';
import { AuthContext } from '../../Auth/Authcontext';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router';


const AddModelForm = () => {
  const {user} =use(AuthContext)
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    framework: '',
    useCase: '',
    dataset: '',
    description: '',
    image: '',
    createdBy: user.email,
    purchased: 0,
    createdAt:new Date()

  

  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/models', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('AI Model added successfully!');
        // Reset form
        setFormData({
          name: '',
          framework: '',
          useCase: '',
          dataset: '',
          description: '',
          image: '',
          createdBy: '',
          purchased: 0,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to add AI Model.');
      });
      navigate('/allmodel')
  };






    








  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New AI Model</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Model Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., BERT"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="" disabled>
      Select Framework
    </option>
    <option value="TensorFlow">TensorFlow</option>
    <option value="PyTorch">PyTorch</option>
    <option value="Keras">Keras</option>
    <option value="HuggingFace Transformers">HuggingFace Transformers</option>
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
            placeholder="e.g., NLP, Computer Vision"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Dataset */}
        <div>
          <label className="block font-medium mb-1">Dataset</label>
          <input
            type="text"
            name="dataset"
            required
            value={formData.dataset}
            onChange={handleChange}
            placeholder="e.g., Wikipedia"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
                required
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description about the model"
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
                required
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Created By */}
        <div>
          <label className="block font-medium mb-1">Created By (Email)</label>
          <input
            type="email"
            
            name="createdBy"
            value={formData.createdBy}
            readOnly
            onChange={handleChange}
            placeholder="user@example.com"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Purchased */}
        <div>
          <label className="block font-medium mb-1">Purchased</label>
          <input
            type="number"
            name="purchased"
            value={formData.purchased}
            onChange={handleChange}
            readOnly
            min={0}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
<button
  type="submit"
  className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
>
  Add AI Model
</button>
      </form>
    </div>
  );
};

export default AddModelForm;
