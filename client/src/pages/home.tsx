import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Code, 
  Video, 
  Image as ImageIcon, 
  FileText, 
  Cpu, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

// Import assets
import heroBg from "@assets/generated_images/abstract_creative_digital_art_background_for_hero_section.png";
import logoImg from "@assets/generated_images/minimalist_modern_logo_design_concept.png";
import photoImg from "@assets/generated_images/before_and_after_photo_restoration_concept.png";
import videoImg from "@assets/generated_images/video_editing_timeline_interface_concept.png";
import webImg from "@assets/generated_images/modern_code_and_web_design_concept.png";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "Graphisme & Branding",
      description: "Création de logos uniques, chartes graphiques et identités visuelles complètes pour votre marque."
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Développement Web",
      description: "Sites vitrines, portfolios et applications web modernes, responsives et performantes."
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-primary" />,
      title: "Retouche Photo",
      description: "Restauration de photos anciennes, détourage, colorisation et montages photos professionnels."
    },
    {
      icon: <Video className="w-10 h-10 text-primary" />,
      title: "Montage Vidéo",
      description: "Création de vidéos publicitaires, montage dynamique, et motion design pour vos réseaux sociaux."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Mise en Page",
      description: "Design professionnel de documents Word, présentations PowerPoint percutantes et PDFs interactifs."
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: "Solutions IA",
      description: "Intégration et maîtrise des outils d'intelligence artificielle pour optimiser vos créations."
    }
  ];

  const portfolioItems = [
    { title: "Identité Visuelle Tech", category: "Branding", image: logoImg },
    { title: "Plateforme E-commerce", category: "Web Dev", image: webImg },
    { title: "Campagne Publicitaire", category: "Vidéo", image: videoImg },
    { title: "Restauration d'Archives", category: "Retouche", image: photoImg },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Portfolio.
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">À propos</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Réalisations</a>
            <Button variant="default" className="rounded-full px-6" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Me Contacter
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-white/10"
            >
              <div className="flex flex-col p-6 space-y-4">
                <a href="#about" className="text-lg font-medium" onClick={toggleMenu}>À propos</a>
                <a href="#services" className="text-lg font-medium" onClick={toggleMenu}>Services</a>
                <a href="#portfolio" className="text-lg font-medium" onClick={toggleMenu}>Réalisations</a>
                <a href="#contact" className="text-lg font-medium text-primary" onClick={toggleMenu}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 mb-4">
                Disponible pour freelance
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Créativité <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digitale</span> & <br/>
              Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Technique</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-lg">
              Je transforme vos idées en réalité visuelle. Graphiste expert en IA et développeur web passionné, je conçois des expériences numériques uniques.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base h-12 px-8">
                Voir mes travaux
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/5">
                Mes Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-card/30 backdrop-blur-sm p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                   <img src={logoImg} className="rounded-lg w-full h-40 object-cover" alt="Work 1" />
                   <img src={videoImg} className="rounded-lg w-full h-56 object-cover" alt="Work 2" />
                 </div>
                 <div className="space-y-4 pt-8">
                   <img src={webImg} className="rounded-lg w-full h-56 object-cover" alt="Work 3" />
                   <img src={photoImg} className="rounded-lg w-full h-40 object-cover" alt="Work 4" />
                 </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Mes Services</h2>
            <p className="text-muted-foreground">
              Une gamme complète de compétences pour répondre à tous vos besoins créatifs et techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-primary/10 w-fit rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-display">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Dernières Réalisations</h2>
              <p className="text-muted-foreground max-w-lg">
                Découvrez une sélection de mes projets récents, alliant design graphique et développement web.
              </p>
            </div>
            <Button variant="ghost" className="group">
              Voir tout le portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-primary/80 hover:bg-primary">{item.category}</Badge>
                  <h3 className="text-xl font-bold font-display text-white">{item.title}</h3>
                  <div className="mt-4 flex items-center text-white/80 text-sm font-medium">
                    Voir le projet <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills/Tools Ticker (Optional but nice) */}
      <section className="py-12 border-y border-white/5 bg-black/20">
         <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Outils & Technologies Maîtrisés</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Just text representations for simplicity, could be logos */}
               <span className="text-xl font-display font-bold">Photoshop</span>
               <span className="text-xl font-display font-bold">Illustrator</span>
               <span className="text-xl font-display font-bold">Premiere Pro</span>
               <span className="text-xl font-display font-bold">React</span>
               <span className="text-xl font-display font-bold">Tailwind</span>
               <span className="text-xl font-display font-bold">Midjourney</span>
               <span className="text-xl font-display font-bold">Office 365</span>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Prêt à lancer votre <br/>
                <span className="text-primary">prochain projet ?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Que ce soit pour une refonte d'identité, un site web ou une campagne vidéo, je suis à votre écoute pour discuter de vos besoins.
              </p>
              
              <div className="space-y-4 pt-4">
                <a href="mailto:contact@portfolio.com" className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@portfolio.com</p>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center space-x-2 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30 hover:text-primary transition-all">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center space-x-2 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30 hover:text-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-white/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom</label>
                    <Input placeholder="Votre nom" className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="votre@email.com" className="bg-background/50 border-white/10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sujet</label>
                  <Input placeholder="Projet de logo, Site web..." className="bg-background/50 border-white/10" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Parlez-moi de votre projet..." className="min-h-[150px] bg-background/50 border-white/10" />
                </div>

                <Button className="w-full text-lg h-12">Envoyer le message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-6">
          <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
          <p className="mt-2 text-xs opacity-50">Design & Développement par moi-même.</p>
        </div>
      </footer>
    </div>
  );
}
