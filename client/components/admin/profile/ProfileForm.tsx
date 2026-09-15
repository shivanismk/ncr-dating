"use client";
import { Plus, Trash2 } from "lucide-react";
import { uploadImage } from "@/services/cloudinary.service";
import { useEffect, useState } from "react";

import { createProfile } from "@/services/profile.service";

import {
  getStates,
  getCities,
} from "@/services/location.service";

import {
  getCategories,
} from "@/services/category.service";

export default function ProfileForm() {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    category: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    description: "",
    image: "",
  });

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState([
    {
      label: "",
      value: "",
    },
  ]);

  useEffect(() => {
    async function loadData() {
      try {
        const stateData = await getStates();
        setStates(stateData);

        const categoryData = await getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);


  useEffect(() => {
    async function loadCities() {
      if (!formData.state) {
        setCities([]);
        return;
      }

      try {
        const data = await getCities(formData.state);
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCities();
  }, [formData.state]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData({
        ...formData,
        state: value,
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  function addFeature() {
    setAdditionalDetails([
      ...additionalDetails,
      {
        label: "",
        value: "",
      },
    ]);
  }

  function removeFeature(index: number) {
    setAdditionalDetails(
      additionalDetails.filter((_, i) => i !== index)
    );
  }

  function updateFeature(
    index: number,
    key: "label" | "value",
    value: string
  ) {
    const data = [...additionalDetails];

    data[index][key] = value;

    setAdditionalDetails(data);
  }

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const result = await uploadImage(file);

      setPreview(result.secure_url);

      setFormData({
        ...formData,
        image: result.secure_url,
      });

    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload profile image");
      return;
    }


    try {

      await createProfile({
        ...formData,
        additionalDetails,
      });

      alert("✅ Profile Added Successfully");

      setFormData({
        name: "",
        state: "",
        city: "",
        category: "",
        phone: "",
        whatsapp: "",
        email: "",
        address: "",
        description: "",
        image: "",
      });

      setCities([]);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to save profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}

      className="space-y-6 rounded-xl bg-white p-8 shadow"
    >

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />


      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      >
        <option value="">Select State</option>

        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>


      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      >
        <option value="">Select City</option>

        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      >
        <option value="">Select Category</option>

        <option value="Call Girl">
          Call Girl
        </option>
      </select>

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp Number"
        value={formData.whatsapp}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <div className="space-y-3">

        <label className="block font-medium">
          Profile Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full rounded border p-3"
        />

        {uploading && (
          <p className="text-blue-600">
            Uploading Image...
          </p>
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-52 w-52 rounded-lg border object-cover"
          />
        )}

      </div>

      <div className="rounded-xl border p-5">

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Additional Details
          </h2>

          <button
            type="button"
            onClick={addFeature}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <Plus size={18} />
            Add Feature
          </button>

        </div>

        <div className="space-y-3">

          {additionalDetails.map((item, index) => (

            <div
              key={index}
              className="grid grid-cols-12 gap-3"
            >

              <input
                placeholder="Label (Experience)"
                value={item.label}
                onChange={(e) =>
                  updateFeature(
                    index,
                    "label",
                    e.target.value
                  )
                }
                className="col-span-5 rounded border p-3"
              />

              <input
                placeholder="Value (10 Years)"
                value={item.value}
                onChange={(e) =>
                  updateFeature(
                    index,
                    "value",
                    e.target.value
                  )
                }
                className="col-span-5 rounded border p-3"
              />

              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="col-span-2 rounded border border-red-500 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="mx-auto" size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Save Profile
      </button>
    </form>
  );
}