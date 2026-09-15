import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}