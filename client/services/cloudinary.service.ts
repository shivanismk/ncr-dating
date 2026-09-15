// export async function uploadImage(file: File) {
//   const formData = new FormData();

//   formData.append("file", file);

//   formData.append(
//     "upload_preset",
//     process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
//   );

//   const cloudName =
//     process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

//   const res = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Image upload failed");
//   }

//   return res.json();
// }
// ------------------------


// export async function uploadImage(file: File) {
//   const token = localStorage.getItem("adminToken");

//   if (!token) {
//     throw new Error("Admin authentication required");
//   }

//   const formData = new FormData();

//   formData.append("file", file);

//   const res = await fetch(
//     "https://api.connectncr.in/api/uploads/image",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     }
//   );

//   const response = await res.json();

//   if (!res.ok || !response.success) {
//     console.error("Image upload error:", response);

//     throw new Error(
//       response.message || "Image upload failed"
//     );
//   }

//   return response;
// }



// ---------------


// export async function uploadImage(file: File) {
//   const token = localStorage.getItem("adminToken");

//   if (!token) {
//     throw new Error("Admin authentication required");
//   }

//   const formData = new FormData();
//   formData.append("file", file);

//   const res = await fetch(
//     "https://api.connectncr.in/api/uploads/image",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     }
//   );

//   const response = await res.json();

//   if (!res.ok || !response.success) {
//     console.error("Image upload error:", response);
//     throw new Error(response.message || "Image upload failed");
//   }

//   return response;
// }

// --------------------

// export async function uploadImage(file: File) {
//   const token = localStorage.getItem("adminToken");

//   if (!token) {
//     throw new Error("Admin authentication required");
//   }

//   const formData = new FormData();
//   formData.append("file", file);

//   const res = await fetch(
//     "https://api.connectncr.in/api/uploads/image",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     }
//   );

//   const response = await res.json();

//   if (!res.ok || !response.success) {
//     console.error("Image upload error:", response);
//     throw new Error(response.message || "Image upload failed");
//   }

//   return response;
// }
// ------------------

export async function uploadImage(file: File) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    throw new Error("Admin authentication required");
  }

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(
    "https://api.connectncr.in/api/uploads/image",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  const response = await res.json();

  if (!res.ok || !response.success) {
    console.error("Image upload error:", response);
    throw new Error(response.message || "Image upload failed");
  }

  return response;
}

