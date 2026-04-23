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
  Link as LinkIcon,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from './lib/utils';
import akashProfile from './assets/Akash1.png';
import emailjs from '@emailjs/browser';

// --- Components ---

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070B1A] overflow-hidden"
    >
      {/* Background Layer in Loading Screen */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-animate"
          style={{
            backgroundImage: "linear-gradient(rgba(7, 11, 26, 0.6), rgba(7, 11, 26, 0.6)), url('/bg-futuristic.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-text-primary uppercase text-glow text-center"
        >
          𝘼𝙠𝙖𝙨𝙝 𝙅𝙖𝙡𝙞𝙜𝙞𝙙𝙖𝙙
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-accent-lime shadow-[0_0_15px_rgba(198,255,0,0.6)]"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] font-mono tracking-[0.4em] uppercase text-text-secondary/60"
        >
          Loading Portfolio...
        </motion.p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-accent-lime/5 blur-[120px] rounded-full pointer-events-none" />
    </motion.div>
  );
};


const Navbar = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean, toggleTheme: () => void }) => {
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
          <span className="text-xl font-bold tracking-tighter text-text-primary uppercase tracking-[0.2em] text-glow">𝘼𝙠𝙖𝙨𝙝 𝙅𝙖𝙡𝙞𝙜𝙞𝙙𝙖𝙙</span>
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
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-accent-lime transition-colors rounded-full glass"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-accent-lime transition-colors rounded-full glass"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
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
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      if (newDarkMode) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme-preference', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('theme-preference', 'light');
      }
      return newDarkMode;
    });
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setFormStatus('sending');

    try {
      // Note: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
      const serviceId = 'service_id';
      const templateId = 'template_id';
      const publicKey = 'public_key';

      // SIMULATION MODE: If keys are still placeholders, simulate success for UI testing
      if (serviceId === 'service_id' || templateId === 'template_id' || publicKey === 'public_key') {
        console.warn("EmailJS: Using placeholder keys. Simulating success for demo purposes.");
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Akash Jaligidad',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' }); // Clear form

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className={cn(
        "min-h-screen text-text-primary transition-opacity duration-1000 relative",
        isLoading ? "opacity-0" : "opacity-100"
      )}>
        {/* Animated Background Layer */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-animate"
            style={{
              backgroundImage: isDarkMode 
                ? "linear-gradient(rgba(7, 11, 26, 0.5), rgba(7, 11, 26, 0.5)), url('/bg-futuristic.png')"
                : "linear-gradient(rgba(248, 250, 252, 0.8), rgba(248, 250, 252, 0.8)), url('/bg-futuristic.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center px-12 pt-20 overflow-hidden relative">
            {/* Background Decorative Glow */}
            <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-navy-blue/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                    𝑯𝒆𝒍𝒍𝒐!<br />
                    𝑰 𝒂𝒎    <span className="text-accent-lime text-glow">𝑨𝒌𝒂𝒔𝒉 𝑱𝒂𝒍𝒊𝒈𝒊𝒅𝒂𝒅</span>
                  </h1>
                  <p className="text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                    "Passionate about building <span className="text-text-primary font-medium">Intelligent Systems</span> and solving real-world problems using data."
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-flex items-center justify-center cursor-pointer"
                  >
                    View My Work
                  </motion.a>
                  <motion.a
                    href="/Akash%20Resume.pdf"
                    download="Akash_Resume.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline inline-flex items-center justify-center cursor-pointer"
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download Resume
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-xs font-bold"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                    4+ Projects
                  </motion.div>
                </div>
              </motion.div>

              {/* Profile Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center items-center"
              >
                <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
                  <img
                    src={akashProfile}
                    alt="Akash Jaligidad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="pt-32 pb-20 px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 w-full">
                <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
                  About Me
                </h2>
                <div className="mt-2 space-y-4">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    I am Akash Jaligidad, a passionate Data Science student with a strong interest in artificial intelligence and modern web development. I enjoy learning new concepts, solving real-world problems, and building innovative projects using data-driven approaches. I have developed projects like a heart disease prediction system and an AI-based research platform, which enhanced my skills in machine learning and development. I am a quick learner, a team player, and always eager to explore opportunities that help me grow both technically and professionally.
                  </p>
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
                    <h3 className="text-2xl font-bold text-text-primary">Gen-AI Intern</h3>
                    <p className="text-lg text-text-secondary">Swavik Intership</p>
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
                    <h3 className="text-2xl font-bold text-text-primary">Media Committee</h3>
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
                Project's
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[

                  {
                    title: "NEXUS – AI Research",
                    desc: "AI-powered platform for research, literature review, and summarization.",
                    tech: ["React", "Next.js", "OpenAI", "FireBase", "Python"],
                    icon: <Brain className="w-6 h-6 text-accent-lime" />,
                    url: "https://github.com/akashjaligidad/AILiterature"
                  },
                  {
                    title: "Pharma-Fog",
                    desc: "Analyzes prescriptions to detect medicines and show safe or risky drug interactions clearly.",
                    tech: ["React", "Python", "AI Vision", "Supabase"],
                    icon: <Activity className="w-6 h-6 text-accent-lime" />,
                    url: "https://github.com/akashjaligidad/Pharam-fog"
                  },
                  {
                    title: "Canteen Management System",
                    desc: "A comprehensive solution to manage canteen orders, inventory, and billing efficiently.",
                    tech: ["React", "Node.js", "MongoDB"],
                    icon: <Coffee className="w-6 h-6 text-accent-lime" />,
                    url: "https://github.com/akashjaligidad/Canteen-Management-System"
                  },
                  {
                    title: "Heart Disease Prediction",
                    desc: "Machine learning model to predict heart disease risk using clinical parameters.",
                    tech: ["Python", "Scikit-learn", "Pandas", "MySQL"],
                    icon: <Activity className="w-6 h-6 text-accent-lime" />,
                    url: "https://github.com/akashjaligidad"
                  },
                  {
                    title: "Jewellery E-Commerce",
                    desc: "A modern, responsive e-commerce platform for high-end jewellery collections.",
                    tech: ["React", "Tailwind", "Node.js", "Python", "Firebase"],
                    icon: <Coffee className="w-6 h-6 text-accent-lime" />,
                    url: "https://github.com/akashjaligidad"
                  },

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
                    <h3 className="text-2xl font-bold mb-4 text-text-primary">{project.title}</h3>
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
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
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

                <div className="space-y-20">
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
                            <h3 className="text-xl font-bold text-text-primary/90 uppercase tracking-widest">{item.category}</h3>
                          </div>

                          <p className="text-text-secondary text-sm leading-relaxed mb-6 text-left">
                            {item.desc}
                          </p>

                          <div className="flex flex-wrap gap-3 justify-start">
                            {item.skills.map(skill => (
                              <span
                                key={skill}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-text-secondary text-sm font-medium hover:border-accent-lime/30 hover:text-text-primary transition-all hover:bg-accent-lime/5"
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
                  { title: "Programming in C", url: "https://drive.google.com/file/d/145aE88pCeb-aiU9pj2Kf-0kTr5rZSCbY/view?usp=sharing" },
                  { title: "Web Development using Python", url: "https://drive.google.com/file/d/1VEdmRmLjMlRuok2ruEzV97-OkTpIP4yD/view?usp=sharing" },
                  { title: "Introduction to Full Stack Development", url: "https://drive.google.com/file/d/1K3hK_mNbsPxu4lJipLXmOdQ8N3Z6bTlg/view?usp=sharing" },
                  { title: "MongoDB Certification", url: "https://drive.google.com/file/d/1sQRc0bG8sEYJNamh3m2dPFWA0hthURbR/view?usp=sharing" },
                  { title: "Python for Data Science", url: "https://drive.google.com/file/d/1LbTym8lr0PUYsz7MC7-W6Blw0x7lqcyL/view?usp=sharing" }
                ].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 rounded-2xl bg-card-bg border border-white/[0.05] hover:border-accent-lime/20 hover:bg-navy-blue/40 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center text-accent-lime group-hover:bg-accent-lime group-hover:text-navy-dark transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-text-primary/90">{cert.title}</span>
                    </div>

                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-lime/5 text-accent-lime border border-accent-lime/20 hover:bg-accent-lime hover:text-navy-dark transition-all text-sm font-bold opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <span className="whitespace-nowrap">View</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </motion.a>
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
                        { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/akash-jaligidad/" },
                        { icon: <Mail className="w-6 h-6" />, link: "https://akashjaligidad06.com/" }
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -5, scale: 1.1 }}
                          className="w-14 h-14 rounded-xl border border-white/[0.05] flex items-center justify-center bg-card-bg text-text-primary/50 hover:text-accent-lime hover:border-accent-lime/30 transition-all duration-300"
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
                  {formStatus === 'sent' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                    >
                      <div className="w-20 h-20 rounded-full bg-accent-lime/10 flex items-center justify-center text-accent-lime mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-text-primary">Message Sent!</h3>
                      <p className="text-text-secondary max-w-sm">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="text-accent-lime font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : formStatus === 'error' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                    >
                      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                        <X className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-text-primary">Submission Failed</h3>
                      <p className="text-text-secondary max-w-sm">
                        Something went wrong while sending your message. Please try again or contact me directly via email.
                      </p>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="text-accent-lime font-bold hover:underline"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  ) : (
                    <form className="space-y-8" onSubmit={handleContactSubmit}>
                      <div className="space-y-3">
                        <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-text-primary/10"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-text-primary/10"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-mono text-accent-lime/70 uppercase tracking-widest ml-1">Message</label>
                        <textarea
                          required
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="How can I help you?"
                          className="w-full px-6 py-4 rounded-xl bg-navy-dark/50 border border-white/[0.05] focus:border-accent-lime/40 focus:outline-none transition-all placeholder:text-text-primary/10 resize-none"
                        />
                      </div>
                      <motion.button
                        disabled={formStatus === 'sending'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-accent-lime text-navy-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(198,255,0,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Activity className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-20 px-12 border-t border-white/[0.05] bg-navy-dark/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold tracking-[0.3em] text-text-primary uppercase text-glow">Akash Jaligidad</span>
              <p className="text-text-secondary text-sm max-w-xs">Building intelligent data-driven solutions with modern technologies.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-8">
                <a href="https://github.com/akashjaligidad" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/akash-jaligidad/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
                </a>
                <a href="https://mail.google.com/">
                  <Mail className="w-6 h-6 text-text-secondary hover:text-accent-lime cursor-pointer transition-colors" />
                </a>
              </div>
              <p className="text-text-primary/20 font-mono text-xs uppercase tracking-widest">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

