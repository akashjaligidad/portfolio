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
      scrolled ? "bg-[#0f3d4c]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 border border-white/20" />
            <span className="relative text-xl font-serif italic text-white">A</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Akash</span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
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
            className="lg:hidden bg-[#0f3d4c] border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
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
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-12 pt-20 overflow-hidden relative">
          {/* Background Decorative Glow */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-glow/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                  Hello!<br />
                  I Am Akash Jaligidad
                </h1>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">
                  "Passionate about building <span className="text-white font-medium">intelligent systems</span> and solving real-world problems using data."
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#0f3d4c] bg-opacity-20 border border-white/20 text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-accent-teal hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-accent-teal font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-12 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-white/70 max-w-3xl leading-relaxed text-base">
              I am Akash Jaligidad, a passionate Data Science student with a strong interest in artificial intelligence and modern web development. I enjoy learning new concepts, solving real-world problems, and building innovative projects using data-driven approaches. I have developed projects like a heart disease prediction system and an AI-based research platform, which enhanced my skills in machine learning and development. I am a quick learner, a team player, and always eager to explore opportunities that help me grow both technically and professionally.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
              <Briefcase className="text-white" />
              Experience
            </h2>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <div className="space-y-2">
                  <span className="text-sm font-mono text-white/50 uppercase tracking-widest">Present</span>
                  <h3 className="text-xl font-bold">Gen-AI Intern</h3>
                  <p className="text-base text-white/80">Swavik Technologies</p>
                  <ul className="mt-4 space-y-2 text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                      AI research platform
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                      Literature review generator
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                      Research summarization
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-4 h-4 bg-white/20 rounded-full -left-[9px] top-0" />
                <div className="space-y-2">
                  <span className="text-sm font-mono text-white/50 uppercase tracking-widest">2024 - 2025</span>
                  <h3 className="text-xl font-bold">Media Committee</h3>
                  <p className="text-base text-white/80">IGNITION 2K24 & 25</p>
                  <ul className="mt-4 space-y-2 text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                      Event coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                      Team collaboration
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-12 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
              <Layout className="text-white" />
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Heart Disease Prediction",
                  desc: "Machine learning model to predict heart disease risk using clinical parameters.",
                  tech: ["Python", "Scikit-learn", "Pandas"],
                  icon: <Activity className="w-6 h-6" />
                },
                {
                  title: "Jewellery E-Commerce",
                  desc: "A modern, responsive e-commerce platform for high-end jewellery collections.",
                  tech: ["React", "Tailwind", "Node.js"],
                  icon: <Coffee className="w-6 h-6" />
                },
                {
                  title: "NEXUS – AI Research",
                  desc: "AI-powered platform for research, literature review, and summarization.",
                  tech: ["Next.js", "OpenAI", "PostgreSQL"],
                  icon: <Brain className="w-6 h-6" />
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/60 mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-white/50 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-bold group-hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
              <Wrench className="text-white" />
              Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  category: "Programming",
                  skills: [
                    { name: "C", level: 90 },
                    { name: "C++", level: 85 },
                    { name: "Java (Basic)", level: 60 }
                  ]
                },
                {
                  category: "Languages & Tech",
                  skills: [
                    { name: "Python", level: 95 }
                  ]
                },
                {
                  category: "Web Development",
                  skills: [
                    { name: "HTML", level: 90 },
                    { name: "CSS", level: 85 }
                  ]
                },
                {
                  category: "Database & Backend",
                  skills: [
                    { name: "Firebase", level: 80 },
                    { name: "Supabase", level: 75 }
                  ]
                },
                {
                  category: "Tools",
                  skills: [
                    { name: "VS Code", level: 95 },
                    { name: "Git", level: 85 }
                  ]
                }
              ].map((group, idx) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest text-sm">{group.category}</h3>
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-white/40">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32 px-12 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
              <Award className="text-white" />
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
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-accent-teal transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
              <Mail className="text-white" />
              Get In Touch
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <p className="text-base text-white/60 leading-relaxed max-w-md">
                  I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>
                
                <div className="space-y-8">
                  <a 
                    href="mailto:akashjaligidad06@gmail.com"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-accent-teal transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-mono">Email</p>
                      <p className="text-base font-medium">akashjaligidad06@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/in/akashjaligidad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-accent-teal transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-mono">LinkedIn</p>
                      <p className="text-base font-medium">akashjaligidad</p>
                    </div>
                  </a>
                </div>

                {/* Follow Me Section from Image */}
                <div className="pt-8 space-y-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase">Follow Me</h3>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        filter: ["drop-shadow(0 0 0px #ff6b6b)", "drop-shadow(0 0 8px #ff6b6b)", "drop-shadow(0 0 0px #ff6b6b)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className="w-6 h-6 text-[#ff6b6b] fill-[#ff6b6b]" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: <Github className="w-6 h-6" />, color: "border-white/20 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]", link: "https://github.com/akashjaligidad" },
                      { icon: <Linkedin className="w-6 h-6 text-[#00a0dc]" />, color: "border-[#00a0dc]/20 hover:border-[#00a0dc] hover:shadow-[0_0_15px_rgba(0,160,220,0.3)]", link: "https://linkedin.com/in/akashjaligidad" },
                      { icon: <X className="w-6 h-6" />, color: "border-white/20 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]", link: "#" },
                      { icon: <Mail className="w-6 h-6 text-[#ffcc00]" />, color: "border-[#ffcc00]/20 hover:border-[#ffcc00] hover:shadow-[0_0_15px_rgba(255,204,0,0.3)]", link: "mailto:akashjaligidad06@gmail.com" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className={cn(
                          "w-16 h-16 rounded-xl border-2 flex items-center justify-center bg-black/20 transition-all duration-300",
                          social.color
                        )}
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
                className="p-8 lg:p-12 rounded-[2rem] bg-white/5 border border-white/5"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/40 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/40 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/40 ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="How can I help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none transition-all placeholder:text-white/20 resize-none"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white text-accent-teal font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
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

      <footer className="py-12 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 border border-white/20" />
              <span className="relative text-xl font-serif italic text-white">A</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">Akash</span>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Akash Jaligidad. All rights reserved.</p>
          <div className="flex gap-6">
            <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
