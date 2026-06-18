"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <div
        className="relative aspect-[16/9] overflow-hidden bg-[#D9ECF7]"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
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