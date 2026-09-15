const galleryImages = [
  {
    id: 1,
    title: "Luxury Hotel",
    image: "/images/gallery/image1.jpg",
    height: 320,
    category: "Hotel",
    location: "Kanpur",
  },
  {
    id: 2,
    title: "Restaurant",
    image: "/images/gallery/image2.jpg",
    height: 500,
    category: "Restaurant",
    location: "Delhi",
  },
  {
    id: 3,
    title: "Salon",
    image: "/images/gallery/image3.jpg",
    height: 280,
    category: "Salon",
    location: "Lucknow",
  },
  {
    id: 4,
    title: "Clinic",
    image: "/images/gallery/image4.jpg",
    height: 420,
    category: "Clinic",
    location: "Mumbai",
  },
  {
    id: 5,
    title: "Gym",
    image: "/images/gallery/image5.jpg",
    height: 350,
    category: "Gym",
    location: "Noida",
  },
  {
    id: 6,
    title: "Photographer",
    image: "/images/gallery/image6.jpg",
    height: 540,
    category: "Photography",
    location: "Agra",
  },
];

export function getGalleryImages() {
  return galleryImages;
}