"use client";

import { useState } from "react";

import { createCategory } from "@/services/category.service";

export default function CategoryForm() {

  const [name, setName] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    await createCategory({

      name,

      slug: name
        .toLowerCase()
        .replace(/\s+/g, "-"),

    });

    alert("Category Added");

    setName("");

    location.reload();

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="mb-8 flex gap-4"
    >

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Category Name"
        className="flex-1 rounded border p-3"
      />

      <button
        className="rounded bg-blue-600 px-6 text-white"
      >
        Save
      </button>

    </form>

  );

}