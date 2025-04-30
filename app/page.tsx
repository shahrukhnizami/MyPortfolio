"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { Typed } from "react-typed"
import { Tilt } from "react-tilt"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, Code, Palette, Layout, ChevronRight, ArrowRight } from "lucide-react"
import  ParticleBackground  from "@/components/particle-background"
import { SkillBar } from "@/components/skill-bar"
import { ProjectCard } from "@/components/project-card"

export default function Portfolio() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Website Design",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process. Built with React, Next.js, and Tailwind CSS.",
      image: "/figolive.png",
      category: "web",
      tags: ["Html", "Css", "Tailwind CSS", "Bootstrap"],
      demoLink: "https://shahrukhnizami.github.io/figolive/",
      codeLink: "https://github.com/shahrukhnizami/figolive",
    },
    {
      id: 2,
      title: "Dashboard UI",
      description:
        "A comprehensive dashboard interface with interactive charts, data tables, and real-time updates. Features dark mode and customizable widgets.",
      image: "/restaurant-automation.png",
      category: "ui",
      tags: ["React", "Material Ui", "Javascripit", "Tailwind CSS"],
      demoLink: "https://restaurant-automation.netlify.app/",
      codeLink: "#",

    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A travel destination discovery app with interactive maps, destination details, and trip planning features. Optimized for mobile devices.",
      image: "/react-weather-app.png",
      category: "mobile",
      tags: ["React", "Weather Api",  "Tailwind CSS"],
      demoLink: "https://react-weather-app-eight-wine.vercel.app/",
      codeLink: "https://github.com/shahrukhnizami/ReactWeatherApp/",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Shahrukh</span>Nizami
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Frontend Developer
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Crafting <span className="text-primary">beautiful</span> web experiences
                </h1>
                <div className="h-8 text-xl text-muted-foreground">
                 
                </div>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </motion.div>
                <div className="flex gap-4 pt-2">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="relative mx-auto aspect-square w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Tilt
                  options={{
                    max: 15,
                    scale: 1.05,
                    speed: 1000,
                  }}
                  className="rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-background p-4"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-muted">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Shahrukh Nizami"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <motion.div
                    className="absolute -right-6 top-1/4 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <Code className="h-10 w-10 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute -left-6 top-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-lg"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <Layout className="h-10 w-10 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-10 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-lg"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  >
                    <Palette className="h-10 w-10 text-primary" />
                  </motion.div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                <Badge variant="secondary" className="rounded-sm px-3 font-normal">
                  My Toolkit
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frontend Technologies</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                I specialize in these modern frontend technologies to create responsive and interactive web experiences.
              </p>
            </motion.div>

            <div className="mt-16 space-y-8">
              <SkillBar name="React" percentage={90} color="bg-cyan-500" />
              <SkillBar name="TypeScript" percentage={60} color="bg-blue-600" />
              <SkillBar name="Next.js" percentage={80} color="bg-purple-500" />
              <SkillBar name="Tailwind CSS" percentage={95} color="bg-cyan-400" />
              {/* <SkillBar name="Framer Motion" percentage={75} color="bg-purple-500" />
              <SkillBar name="Three.js" percentage={70} color="bg-green-500" /> */}
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
                { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
                { name: "JavaScript", icon: "📜", color: "bg-yellow-500" },
                { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
                { name: "React", icon: "⚛️", color: "bg-cyan-500" },
                { name: "Next.js", icon: "▲", color: "bg-black" },
                { name: "Tailwind CSS", icon: "🌊", color: "bg-cyan-400" },
                { name: "Figma", icon: "🖌️", color: "bg-purple-500" },
                { name: "Git", icon: "📊", color: "bg-orange-600" },
                { name: "Responsive Design", icon: "📱", color: "bg-green-500" },
                { name: "UI/UX", icon: "👁️", color: "bg-indigo-500" },
                { name: "Web Animation", icon: "✨", color: "bg-pink-500" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group flex flex-col items-center justify-center rounded-lg border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${skill.color} text-xl text-white`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-center text-sm font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="text-xl font-bold mb-4">Development Process</h3>
                <div className="grid gap-8 md:grid-cols-4">
                  {[
                    {
                      step: 1,
                      title: "Design",
                      description: "Wireframing and prototyping to create the perfect user experience",
                    },
                    {
                      step: 2,
                      title: "Develop",
                      description: "Clean, maintainable code following best practices",
                    },
                    {
                      step: 3,
                      title: "Test",
                      description: "Rigorous testing across devices and browsers",
                    },
                    {
                      step: 4,
                      title: "Deploy",
                      description: "Optimized deployment with performance monitoring",
                    },
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-lg font-bold">{process.step}</span>
                      </div>
                      <h4 className="font-medium">{process.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                <Badge variant="secondary" className="rounded-sm px-3 font-normal">
                  Portfolio
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A selection of my recent frontend development work. Each project demonstrates different skills and
                technologies.
              </p>
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant={activeFilter === "all" ? "default" : "outline"} onClick={() => setActiveFilter("all")}>
                All
              </Button>
              <Button variant={activeFilter === "web" ? "default" : "outline"} onClick={() => setActiveFilter("web")}>
                Web
              </Button>
              <Button variant={activeFilter === "ui" ? "default" : "outline"} onClick={() => setActiveFilter("ui")}>
                UI/UX
              </Button>
              <Button
                variant={activeFilter === "mobile" ? "default" : "outline"}
                onClick={() => setActiveFilter("mobile")}
              >
                Mobile
              </Button>
            </div>

            <div className="mt-16 space-y-20">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-16 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="#">
                  View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Tilt
                  options={{
                    max: 10,
                    scale: 1.05,
                    speed: 1000,
                  }}
                >
                  <div className="relative  mx-auto aspect-[3/5] w-full max-w-sm overflow-hidden rounded-lg border-2 border-muted shadow-xl">
                    <Image
                      src="/Shahrukh-profile-pic.png"
                      alt="Shahrukh Nizami"
                      fill
                      className="object-cover  "
                    />
                  </div>
                </Tilt>
                <motion.div
                  className="absolute -bottom-6 -right-6 h-32 w-32 rounded-lg border-2 border-muted bg-primary/10 shadow-xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-12 w-12 text-primary" />
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <Badge variant="secondary" className="rounded-sm px-3 font-normal">
                    About Me
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frontend Developer & UI Enthusiast</h2>
                <p className="text-muted-foreground">
                  I'm Shahrukh Nizami, a passionate frontend developer with 5+ years of experience creating beautiful, responsive,
                  and user-friendly web applications. I specialize in translating design concepts into pixel-perfect
                  interfaces with clean, maintainable code.
                </p>
                <p className="text-muted-foreground">
                  My journey in web development began when I built my first website in college. Since then, I've worked
                  with startups and established companies to create engaging digital experiences that users love.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                  or hiking in the mountains.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-3xl font-bold">
                      <CountUp end={5} suffix="+" duration={2.5} />
                    </p>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">
                      <CountUp end={50} suffix="+" duration={2.5} />
                    </p>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                <Badge variant="secondary" className="rounded-sm px-3 font-normal">
                  Testimonials
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Feedback</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Here's what clients say about working with me on their frontend projects.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Product Manager, TechCorp",
                  quote:
                    "Shahrukh Nizami transformed our outdated website into a modern, responsive platform. The attention to detail and user experience considerations were exceptional.",
                },
                {
                  name: "Michael Chen",
                  role: "Founder, StartupX",
                  quote:
                    "Working with Shahrukh Nizami was a pleasure. They delivered our e-commerce site ahead of schedule with all the features we requested and added thoughtful UX improvements.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Creative Director, DesignStudio",
                  quote:
                    "As a designer, I appreciate developers who can bring my vision to life exactly as I imagined. Shahrukh Nizami did that and more, suggesting improvements that enhanced the final product.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-4 flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <Badge variant="secondary" className="rounded-sm px-3 font-normal">
                    Contact
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
                <p className="text-muted-foreground">
                  I'm currently available for freelance projects and full-time opportunities. If you're looking for a
                  frontend developer to bring your vision to life, let's talk!
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">nizamishahrukh12@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">https://www.linkedin.com/in/shahrukh-nizami-68a1822a1/</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">https://github.com/shahrukhnizami</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-4">My Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Frontend Development</span>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>UI/UX Consultation</span>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Full-time Positions</span>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Limited
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border bg-card p-6 shadow-md"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="Project inquiry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="rounded-xl bg-primary/10 p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-2xl space-y-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your web presence?</h2>
                <p className="text-muted-foreground text-lg">
                  Let's collaborate to create beautiful, responsive, and user-friendly interfaces that will delight your
                  users and achieve your business goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="#contact">Start a Project</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Shahrukh</span> Nizami
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Frontend Developer specializing in creating beautiful web experiences.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/shahrukhnizami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shahrukh-nizami-68a1822a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link> */}
            <Link
              href="mailto:nizamishahrukh12.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} shahrukh nizami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
