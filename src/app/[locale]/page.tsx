import { Hero } from "@/features/home/Hero";
import { ImageFeature } from "@/features/home/ImageFeature";
import { TextFeature } from "@/features/home/TextFeature";

export default function Page() {
  return (
    <>
      <Hero />
      <TextFeature />
      <ImageFeature />
    </>
  );
}
