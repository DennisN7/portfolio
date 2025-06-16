import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI-Powered Rent Collection System",
      description: "A comprehensive property management solution featuring AI-driven rent collection, tenant management, and automated notifications. Integrates M-Pesa for seamless payments, uses OpenAI for smart reminders, and includes a real-time landlord dashboard.",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "M-Pesa API", "Twilio", "Firebase"],
      link: "#",
      status: "in-progress",
      isLive: false,
      progress: 65,
      features: ["Landlord Dashboard", "AI Chatbot", "Payment Integration", "Tenant Portal"]
    },
    {
      title: "Novu Solutions",
      description: "IT consultation firm specializing in cloud computing, cybersecurity, DevOps, software development, and AI-driven solutions. Features responsive design and modern UI/UX.",
      tech: ["React", "Node.js", "AWS", "Material-UI", "Netlify"],
      link: "https://n0vus.vercel.app/",
      status: "completed",
      isLive: true,
      features: ["Service Showcase", "Project Portfolio", "Contact System"]
    },
    {
      title: "SeeCar",
      description: "AI-powered car damage detection system with automated insurance processing. Uses computer vision for damage assessment and machine learning for cost estimation.",
      tech: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
      link: "#",
      status: "in-progress",
      isLive: false,
      progress: 40,
      features: ["Damage Detection", "Cost Estimation", "Report Generation"]
    },
    {
      title: "Solo Stride",
      description: "Themed from Solo Leveling, level up your life one skill at a time..",
      tech: ["React", "Node.js", "AWS", "Material-UI", "Vercel"],
      link: "https://solo-stride.vercel.app/",
      status: "completed",
      isLive: true,
      features: ["Add Skills", "User Dashboard", "Progress Tracking"]
    },
    {
      title: "Azure Dream",
      description: "AI Agents marketplace plattform",
      tech: ["React", "Node.js", "n8n", "Material-UI", "Vercel"],
      link: "https://azure-dream-beta.vercel.app/",
      status: "completed",
      isLive: true,
      features: ["AI Agents", "Marketplace", "User Dashboard"]
    },
    {
      title: "Mrenga",
      description: "A modern car blog and review website with dynamic content management. Features responsive design, SEO optimization, and integrated content delivery network.",
      tech: ["React", "Contentful CMS", "Netlify", "TailwindCSS"],
      link: "https://mrenga.netlify.app/",
      status: "completed",
      isLive: true,
      features: ["Blog System", "Review Platform", "SEO Optimization"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      technologies: ["React.js", "Next.js", "TypeScript", "Material-UI", "TailwindCSS"],
      icon: "🎨"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "FastAPI", "Python", "PostgreSQL", "Firebase"],
      icon: "⚡"
    },
    {
      category: "AI/ML & Cloud",
      technologies: ["OpenAI API", "TensorFlow", "AWS", "Vercel", "Firebase Cloud"],
      icon: "🤖"
    },
    {
      category: "Payment & Communication",
      technologies: ["M-Pesa Integration", "Twilio API", "WhatsApp Business API"],
      icon: "💳"
    },
    {
      category: "UI/UX Design",
      technologies: ["Figma", "Wix", "Adobe"],
      icon: ""
    }
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <Head>
        <title>Software Engineer & AI Specialist</title>
        <meta name="description" content="Professional portfolio of a Software Engineer and AI Specialist" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-40 border-b border-red-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Profile Section */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="relative cursor-pointer group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg border-2 border-primary hover:border-secondary transition-all duration-300 transform group-hover:shadow-primary/50 sm:w-[50px] sm:h-[50px]"
                  priority
                  quality={90}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg transform transition-all duration-300 group-hover:border-secondary">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 48px, 64px"
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    priority
                    quality={95}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-2 border-darker"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-darker px-4 py-2 rounded-lg text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-primary/20"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <span className="block">Available for hire</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-light/80 hover:text-primary transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-light/80 hover:text-primary transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-darker/95 border-t border-primary/20"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-light/80 hover:text-primary transition-colors py-2"
                    whileHover={{ x: 4 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sofware Engineer & AI Specialist
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-light/80 mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Crafting innovative solutions at the intersection of development and artificial intelligence
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary text-light rounded-lg font-medium hover:bg-secondary transition-colors group flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-darker text-light border border-primary/20 rounded-lg font-medium hover:border-primary transition-colors group flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-darker relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-light text-glow mb-4">About Me</h2>
            <p className="text-light/80 max-w-2xl mx-auto">
              Get to know more about my journey, expertise, and passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-darker"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
              <video
                className="w-full h-auto max-h-[600px] object-contain"
                controls
                poster="/images/profile.jpg"
                preload="metadata"
              >
                <source src="/video/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
                <p className="text-light/80">
                  As a Software Engineer and AI Specialist, I combine technical expertise with innovative thinking to create impactful solutions. My journey in technology has been driven by a passion for solving complex problems and pushing the boundaries of what's possible.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Expertise</h3>
                <p className="text-light/80">
                  With extensive experience in both frontend and backend development, I specialize in building scalable applications and integrating AI solutions. My work spans across various domains, from web development to machine learning implementation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Approach</h3>
                <p className="text-light/80">
                  I believe in creating solutions that are not just technically sound but also user-friendly and impactful. My approach combines technical excellence with a deep understanding of user needs and business objectives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-darker">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <motion.h2 
              className="text-3xl font-bold text-light text-glow mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="flex gap-6 items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="text-green-500 bg-green-500/10 p-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-light/80 text-sm">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-yellow-500 bg-yellow-500/10 p-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-light/80 text-sm">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary bg-primary/10 p-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-light/80 text-sm">Live Website</span>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-lg hover-scale relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.status === "completed" && (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-green-500 bg-green-500/10 p-2 rounded-full"
                      title="Completed"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                  {project.status === "in-progress" && (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-yellow-500 bg-yellow-500/10 p-2 rounded-full group relative"
                      title={`In Progress - ${project.progress}%`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-darker px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {project.progress}% Complete
                      </div>
                    </motion.div>
                  )}
                  {project.isLive && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-primary bg-primary/10 p-2 rounded-full"
                      title="Visit Live Website"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </motion.a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-light/80 mb-4">{project.description}</p>
                {project.features && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="bg-primary/5 text-primary/90 px-3 py-1 rounded-full text-sm border border-primary/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.status === "in-progress" && (
                  <div className="mb-4">
                    <div className="w-full bg-darker rounded-full h-1.5">
                      <motion.div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                )}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${project.isLive ? 'text-primary hover:text-secondary' : 'text-gray-500 cursor-not-allowed'}`}
                  whileHover={project.isLive ? { x: 5 } : {}}
                >
                  {project.isLive ? 'Visit Website' : 'Coming Soon'}
                  {project.isLive && (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-light text-glow text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
              <div className="relative p-6 bg-darker rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-light">Frontend Development</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'React/Next.js', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
                    { name: 'TypeScript', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                    { name: 'TailwindCSS', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                    { name: 'Material-UI', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg group/skill"
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                      </svg>
                      <span className="text-sm text-light/80 group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Development */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
              <div className="relative p-6 bg-darker rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m-2-4h.01M17 16h.01" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-light">Backend Development</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'FastAPI', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                    { name: 'Node.js', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
                    { name: 'PostgreSQL', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' },
                    { name: 'Firebase', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg group/skill"
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                      </svg>
                      <span className="text-sm text-light/80 group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI & Cloud */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300 blur" />
              <div className="relative p-6 bg-darker rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-light">AI & Cloud</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'OpenAI API', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { name: 'AWS', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
                    { name: 'TensorFlow', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { name: 'Docker', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg group/skill"
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                      </svg>
                      <span className="text-sm text-light/80 group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skill Progress Bars */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Frontend Development', progress: 90 },
              { name: 'Backend Development', progress: 85 },
              { name: 'AI Integration', progress: 80 },
              { name: 'Cloud Services', progress: 85 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-light font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-darker rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-darker">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 
              className="text-3xl font-bold text-light text-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-sm font-medium">Available for Hire</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Location */}
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-light font-medium mb-1">Location</h3>
                  <p className="text-light/60">Nairobi, Kenya</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.a
                href="mailto:denniskinuthis247@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-3a1 1 0 00-1-1h-14a1 1 0 00-1 1v3zM9 8h6v-1H9v1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-light font-medium mb-1">Email</h3>
                  <p className="text-light/60 group-hover:text-primary transition-colors">denniskinuthia247@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+254759581774"
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-light font-medium mb-1">Phone</h3>
                  <p className="text-light/60 group-hover:text-primary transition-colors">0759 58 17 74</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/DennisN7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative p-6 bg-darker border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                  <svg className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <h3 className="text-light font-medium mb-1">GitHub</h3>
                  <p className="text-light/60 text-sm group-hover:text-primary transition-colors">View Projects</p>
                </div>
              </motion.a>

              {/* Behance */}
              <motion.a
                href="https://www.behance.net/dennisngugi1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative p-6 bg-darker border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                  <svg className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                  <h3 className="text-light font-medium mb-1">Behance</h3>
                  <p className="text-light/60 text-sm group-hover:text-primary transition-colors">View Designs</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker text-light/80 py-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <motion.div 
              className="relative w-10 h-10"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
                quality={90}
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </footer>
    </>
  );
}
