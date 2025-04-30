"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import { Tilt } from "react-tilt"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  demoLink: string
  codeLink: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
    >
      <div className={`relative ${isEven ? "md:order-1" : "md:order-2"}`}>
        <Tilt options={{ max: 15, scale: 1.05, speed: 1000 }}>
          <motion.div
            className="aspect-video overflow-hidden rounded-lg border shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </div>

          </motion.div>
        </Tilt>
      </div>
      <div className={`space-y-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.demoLink} className="inline-flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.codeLink} className="inline-flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}