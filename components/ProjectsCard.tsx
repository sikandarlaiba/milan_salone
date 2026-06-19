"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  function handleMouseEnter() {
    if (!videoRef.current) return;
    playPromiseRef.current = videoRef.current.play();
  }

  function handleMouseLeave() {
    const video = videoRef.current;
    if (!video) return;
    if (playPromiseRef.current) {
      playPromiseRef.current.then(() => {
        video.pause();
        video.currentTime = 0;
      }).catch(() => {});
      playPromiseRef.current = null;
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }

  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <div
        className="relative aspect-[16/9] overflow-hidden bg-[#D9ECF7]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={project.image} alt={project.name} fill className="object-cover" />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <p className="mt-[10px] text-[15px] font-bold md:text-[18px]">{project.name}</p>
    </Link>
  );
}