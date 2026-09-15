"use client";

import { useState } from "react";

export default function StatesPage() {

  const [form, setForm] = useState({
    name: "",
    slug: "",
    image: "",
    description: "",
  });

  async function saveState(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/states", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    console.log(data);

    if (data.success) {
      alert("State Added Successfully");

      setForm({
        name: "",
        slug: "",
        image: "",
        description: "",
      });
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Add State
      </h1>

      <form
        onSubmit={saveState}
        className="space-y-5 rounded-xl bg-white p-6 shadow"
      >

        <input
          placeholder="State Name"
          value={form.name}
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
          className="w-full rounded border p-3"
        />

        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e)=>
            setForm({
              ...form,
              slug:e.target.value
            })
          }
          className="w-full rounded border p-3"
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e)=>
            setForm({
              ...form,
              image:e.target.value
            })
          }
          className="w-full rounded border p-3"
        />

        <textarea
          placeholder="Description"
          rows={5}
          value={form.description}
          onChange={(e)=>
            setForm({
              ...form,
              description:e.target.value
            })
          }
          className="w-full rounded border p-3"
        />

        <button
          className="rounded bg-blue-600 px-6 py-3 text-white"
        >
          Save State
        </button>

      </form>

    </div>
  );
}