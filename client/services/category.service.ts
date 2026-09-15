import { Category } from "@/types/category";

const API = "http://localhost:5000/api/categories";

export async function createCategory(
  category: Category
) {
  const res = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(category),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

export async function getCategories() {
  const res = await fetch(API, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}