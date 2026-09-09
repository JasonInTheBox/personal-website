"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRightIcon } from "@/components/Icons";
import { ProjectSlide } from "@/components/ProjectSlide";
import { projects } from "@/data/projects";

export function ProjectCarousel() {
  const trackRef = useRef<HTMLOListElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, projects.length - 1));
    slideRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setCurrentIndex(nextIndex);
  };

  const updateCurrentSlide = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const nearestIndex = slideRefs.current.reduce((nearest, slide, index) => {
      if (!slide) return nearest;
      const nearestSlide = slideRefs.current[nearest];
      if (!nearestSlide) return index;
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      const nearestDistance = Math.abs(nearestSlide.getBoundingClientRect().left - trackLeft);
      return distance < nearestDistance ? index : nearest;
    }, 0);

    setCurrentIndex(nearestIndex);
  };

  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="page-shell work-heading-row">
        <div>
          <p className="section-label">Selected work</p>
          <h2 id="selected-work-title">A few things I’ve built</h2>
        </div>
        <div className="carousel-controls">
          <p aria-live="polite" aria-atomic="true">
            <span>0{currentIndex + 1}</span> / 0{projects.length}
          </p>
          <button
            type="button"
            onClick={() => goToSlide(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goToSlide(currentIndex + 1)}
            disabled={currentIndex === projects.length - 1}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <ol
        className="carousel-track"
        ref={trackRef}
        aria-label="Selected projects"
        tabIndex={0}
        onScroll={updateCurrentSlide}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goToSlide(currentIndex + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToSlide(currentIndex - 1);
          }
        }}
      >
        {projects.map((project, index) => (
          <li
            key={project.slug}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
          >
            <ProjectSlide project={project} index={index} />
          </li>
        ))}
      </ol>

      <div className="page-shell work-footer">
        <p></p>
        <Link className="text-link" href="/projects">
          See all projects <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
}
