// import { galleryImages } from "@/data/gallery";
// import GalleryCard from "./GalleryCard";

// export default function GalleryGrid() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-16">

//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//         {galleryImages.map((image) => (
//           <GalleryCard
//             key={image.id}
//             title={image.title}
//             image={image.image}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }

// import { galleryImages } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";
import { getGalleryImages } from "@/services/gallery.service";

export default function GalleryGrid() {
const images = getGalleryImages();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <GalleryLightbox images={images} />
    </section>
  );
}