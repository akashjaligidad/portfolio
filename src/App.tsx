import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Award, 
  Menu, 
  X,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  Download,
  Send,
  Activity,
  User,
  Coffee,
  CheckCircle2,
  Trophy,
  Brain,
  Monitor,
  Layout,
  Server,
  Wrench,
  GraduationCap,
  Briefcase,
  MapPin,
  Phone,
  Home,
  FileText,
  Settings,
  Link as LinkIcon
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-navy-dark/90 backdrop-blur-md py-4 border-b border-white/[0.05]" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <span className="text-xl font-bold tracking-tighter text-white uppercase tracking-[0.2em] text-glow">Akash Jaligidad</span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-text-secondary hover:text-accent-lime transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-accent-lime transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-12 pt-20 overflow-hidden relative">
          {/* Background Decorative Glow */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-lime/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-navy-blue/30 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                  Hello!<br />
                  I Am <span className="text-accent-lime text-glow">Akash Jaligidad</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                  "Passionate about building <span className="text-white font-medium">intelligent systems</span> and solving real-world problems using data."
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-12 bg-navy-dark/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-text-secondary max-w-3xl leading-relaxed text-lg">
                  I am Akash Jaligidad, a passionate Data Science student with a strong interest in artificial intelligence and modern web development. I enjoy learning new concepts, solving real-world problems, and building innovative projects using data-driven approaches. I have developed projects like a heart disease prediction system and an AI-based research platform, which enhanced my skills in machine learning and development. I am a quick learner, a team player, and always eager to explore opportunities that help me grow both technically and professionally.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent-lime/10 rounded-2xl blur-2xl group-hover:bg-accent-lime/20 transition-all duration-500" />
                <div className="relative aspect-square rounded-2xl border border-white/10 overflow-hidden bg-navy-blue/40 flex items-center justify-center p-12">
                   <User className="w-32 h-32 text-accent-lime/20 group-hover:text-accent-lime/40 transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 flex items-center gap-4">
              Experience
            </h2>
            <div className="space-y-12 max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute w-5 h-5 bg-navy-dark border-2 border-accent-lime rounded-full -left-[11px] top-0 shadow-[0_0_15px_rgba(198,255,0,0.5)]" />
                <div className="space-y-3">
                  <span className="text-xs font-mono text-accent-lime uppercase tracking-[0.3em]">Present</span>
                  <h3 className="text-2xl font-bold text-white">Gen-AI Intern</h3>
                  <p className="text-lg text-text-secondary">Swavik Technologies</p>
                  <ul className="mt-6 space-y-3">
                    {['AI research platform', 'Literature review generator', 'Research summarization'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-text-secondary">
                        <ArrowRight className="w-4 h-4 text-accent-lime" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute w-5 h-5 bg-navy-dark border-2 border-white/20 rounded-full -left-[11px] top-0" />
                <div className="space-y-3">
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-[0.3em]">2024 - 2025</span>
                  <h3 className="text-2xl font-bold text-white">Media Committee</h3>
                  <p className="text-lg text-text-secondary">IGNITION 2K24 & 25</p>
                  <ul className="mt-6 space-y-3">
                    {['Event coordination', 'Team collaboration'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-text-secondary">
                        <ArrowRight className="w-4 h-4 text-accent-lime" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-12 bg-navy-dark/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 flex items-center gap-4">
              Selected Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Heart Disease Prediction",
                  desc: "Machine learning model to predict heart disease risk using clinical parameters.",
                  tech: ["Python", "Scikit-learn", "Pandas"],
                  icon: <Activity className="w-6 h-6 text-accent-lime" />
                },
                {
                  title: "Jewellery E-Commerce",
                  desc: "A modern, responsive e-commerce platform for high-end jewellery collections.",
                  tech: ["React", "Tailwind", "Node.js"],
                  icon: <Coffee className="w-6 h-6 text-accent-lime" />
                },
                {
                  title: "NEXUS – AI Research",
                  desc: "AI-powered platform for research, literature review, and summarization.",
                  tech: ["Next.js", "OpenAI", "PostgreSQL"],
                  icon: <Brain className="w-6 h-6 text-accent-lime" />
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-glow p-8 rounded-2xl group flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-lime/5 flex items-center justify-center mb-8 border border-accent-lime/10 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-text-secondary mb-8 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-3 py-1 rounded-md bg-white/5 text-text-secondary border border-white/5 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-bold text-accent-lime group-hover:text-accent-hover transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Timeline Layout */}
        <section id="skills" className="py-32 px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lime/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl font-bold mb-24 text-center">
              Skills & Expertise
            </h2>

            <div className="relative">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-lime/0 via-accent-lime/30 to-accent-lime/0 -translate-x-1/2 hidden lg:block" />
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-lime/0 via-accent-lime/30 to-accent-lime/0 lg:hidden" />

              <div className="space-y-24">
                {[
                  {
                    category: "Programming",
                    skills: ["C", "C++", "Python"],
                    desc: "Strong foundation in programming using C and C++ for problem-solving and logic building. Skilled in Python for data analysis, machine learning, and developing efficient applications. Able to write clean, optimized, and structured code.",
                    icon: <Terminal className="w-6 h-6" />,
                    index: 1
                  },
                  {
                    category: "Web Development",
                    skills: ["HTML", "CSS"],
                    desc: "Experienced in building responsive and user-friendly web interfaces using HTML and CSS. Capable of designing clean layouts with modern UI/UX principles. Focus on creating visually appealing and accessible web pages.",
                    icon: <Layout className="w-6 h-6" />,
                    index: 2
                  },
                  {
                    category: "Database & Backend",
                    skills: ["Firebase", "Supabase"],
                    desc: "Hands-on experience with Firebase and Supabase for backend services and real-time data handling. Able to store, manage, and retrieve data efficiently. Familiar with integrating databases into web applications.",
                    icon: <Server className="w-6 h-6" />,
                    index: 3
                  },
                  {
                    category: "Tools",
                    skills: ["VS Code", "Git", "GitHub"],
                    desc: "Proficient in using VS Code for efficient coding and development workflows. Experienced with Git and GitHub for version control, collaboration, and project management. Able to manage code repositories and track changes effectively.",
                    icon: <Wrench className="w-6 h-6" />,
                    index: 4
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.category}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn(
                      "relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0",
                      idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-[42%]">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="card-glow p-8 rounded-3xl group"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-accent-lime/10 flex items-center justify-center text-accent-lime group-hover:bg-accent-lime group-hover:text-navy-dark transition-all duration-300 shrink-0">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white/90 uppercase tracking-widest">{item.category}</h3>
                        </div>
                        
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 text-left">
                          {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-3 justify-start">
                          {item.skills.map(skill => (
                            <span 
                              key={skill} 
                              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-text-secondary text-sm font-medium hover:border-accent-lime/30 hover:text-white transition-all hover:bg-accent-lime/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-navy-dark border-2 border-accent-lime flex items-center justify-center text-accent-lime font-bold shadow-[0_0_15px_rgba(198,255,0,0.4)]">
                        {item.index}
                      </div>
                      <div className="absolute inset-0 bg-accent-lime/20 rounded-full blur-lg animate-pulse" />
                    </div>

                    {/* Spacer for layout balancing */}
                    <div className="hidden lg:block w-[42%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32 px-12 bg-navy-dark/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 flex items-center gap-4">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Programming in C",
                "Web Development using Python",
                "Introduction to Full Stack Development",
                "MongoDB Certification",
                "Python for Data Science"
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-card-bg border border-white/[0.05] hover:border-accent-lime/20 hover:bg-navy-blue/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center text-accent-lime group-hover:bg-accent-lime group-hover:text-navy-dark transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium text-white/90">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-12 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-lime/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 flex items-center gap-4">
              Get In Touch
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-24">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Let's build something <span className="text-accent-lime">amazing</span> together.</h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>
                
                <div className="space-y-8">
                  <a 
                    href="mailto:akashjaligidad06@gmail.com"
                    className="flex items-center gap-6 group max-w-fit"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card-bg border border-white/[0.05] flex items-center justify-center text-accent-lime group-hover:bg-accent-lime group-hover:text-navy-dark transition-all duration-300">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-[0.4em]">Email</p>
                      <p className="text-lg font-medium group-hover:text-accent-lime transition-colors">akashjaligidad06@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/in/akashjaligidad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group max-w-fit"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card-bg border border-white/[0.05] flex items-center justify-center text-accent-lime group-hover:bg-accent-lime group-hover:text-navy-dark transition-all duration-300">
                      <Linkedin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-[0.4em]">LinkedIn</p>
                      <p className="text-lg font-medium group-hover:text-accent-lime transition-colors">akashjaligidad</p>
                    </div>
                  </a>
                </div>

                {/* Follow Me */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em]">Follow Me</h3>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: <Github className="w-6 h-6" />, link: "https://github.com/akashjaligidad" },
                      { icon: <Linkedin className="w-6 h-6" />, link: "https://linkedin.com/in/akashjaligidad" },
                      { icon: <Mail className="w-6 h-6" />, link: "mailto:akashjaligidad06@gmail.com" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="w-14 h-14 rounded-xl border border-white/[0.05] flex items-center justify-center bg-card-bg text-white/50 hover:text-accent-lime hover:border-accent-lime/30 transition-all duration-300"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 lg:p-12 rounded-3xl bg-card-bg border border-white/[0.05] relative z-10"
              >
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3">
                    <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="How can I help you?"
                      className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-white/10 resize-none"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-accent-lime text-navy-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(198,255,0,0.3)] transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-12 border-t border-white/[0.05] bg-navy-dark/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-bold tracking-[0.3em] text-white uppercase text-glow">Akash Jaligidad</span>
            <p className="text-text-secondary text-sm max-w-xs">Building intelligent data-driven solutions with modern technologies.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a href="https://github.com/akashjaligidad" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/in/akashjaligidad" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
              </a>
              <a href="mailto:akashjaligidad06@gmail.com">
                <Mail className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
              </a>
            </div>
            <p className="text-white/20 font-mono text-xs uppercase tracking-widest">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
