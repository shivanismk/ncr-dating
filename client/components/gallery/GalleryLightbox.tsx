// "use client";

// import Masonry from "react-masonry-css";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";

// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// // type Props = {
// //   images: {
// //     image: string;
// //     title: string;
// //   }[];
// // };

// type Props = {
//   images: {
//     id: number;
//     title: string;
//     image: string;
//     height: number;
//     category: string;
//     location: string;
//   }[];
// };

// export default function GalleryLightbox({ images }: Props) {
//   const [index, setIndex] = useState(-1);

//   return (
//     <>
//       {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
//         <Masonry
//               breakpointCols={{
//                   default: 4,
//                   1400: 4,
//                   1100: 3,
//                   768: 2,
//                   500: 1,
//               }}

//               className="flex gap-6"
//               columnClassName="space-y-6"
//           ></Masonry>
        
//         {images.map((img, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className="overflow-hidden rounded-xl shadow-lg"
//           >
//             <img
//               src={img.image}
//               alt={img.title}
//               className="h-72 w-full object-cover transition hover:scale-110 duration-300"
//             />
//           </button>
//         ))}
//       </div>
         




//       <Lightbox
//         open={index >= 0}
//         close={() => setIndex(-1)}
//         index={index}
//         slides={images.map((img) => ({
//           src: img.image,
//         }))}
//         plugins={[Zoom, Thumbnails]}
//       />
//     </>
//   );
// }



"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Props = {
  images: {
    id: number;
    title: string;
    image: string;
    height: number;
    category: string;
    location: string;
  }[];
};

export default function GalleryLightbox({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 4,
          1400: 4,
          1100: 3,
          768: 2,
          500: 1,
        }}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setIndex(i)}
            className="group relative w-full overflow-hidden rounded-2xl"
          >
            <img
              src={img.image}
              alt={img.title}
              style={{
                height: img.height,
              }}
              className="w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {img.title}
                </h3>

                <p className="text-sm text-gray-200">
                  {img.category}
                </p>

                <p className="text-sm text-gray-300">
                  {img.location}
                </p>
              </div>
            </div>
          </button>
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({
          src: img.image,
        }))}
        plugins={[Zoom, Thumbnails]}
      />
    </>
  );
}