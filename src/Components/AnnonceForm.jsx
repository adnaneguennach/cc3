import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnnonce, updateAnnonce } from "../config/annoncesSlice";
import { useNavigate } from "react-router-dom";

const AnnonceForm = ({ existingAnnonce }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    location: "",
    mapLink: "",
    image: null,
    reserved : false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (existingAnnonce) {
      setFormData(existingAnnonce);
    }
  }, [existingAnnonce]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.location || !formData.mapLink) {
      alert("Please fill in all required fields.");
      return;
    }

    if (existingAnnonce) {
      // Update existing annonce
      dispatch(updateAnnonce(formData));
    } else {
      const userEmail = localStorage.getItem('userEmail')
      dispatch(addAnnonce({ ...formData, id: Date.now(), useEmail : userEmail }));
    }

    setFormData({
      id: "",
      title: "",
      price: "",
      location: "",
      mapLink: "",
      image: null,
    });

    navigate("/dashboard");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        {existingAnnonce ? "Edit Annonce" : "Create Annonce"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm text-gray-600">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mapLink" className="block text-sm text-gray-600">Map Link</label>
          <input
            type="text"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {existingAnnonce ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AnnonceForm;
