"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data } from "@/components/projects/Data";


export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  console.log(data[0]);

  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <p className="max-w-7xl mx-auto mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
        🎯 Click on any project tile to dive deeper and discover the magic behind each one! ✨
      </p>
      <Carousel items={cards} />
    </div>
  );
}
