import { useState, useEffect } from "react";
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
  ExternalLink,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  MoveHorizontal
} from "lucide-react";

// Import assets
import heroBg from "@assets/generated_images/abstract_creative_digital_art_background_for_hero_section.png";
import logoImg from "@assets/generated_images/minimalist_modern_logo_design_concept.png";
import photoImg from "@assets/generated_images/before_and_after_photo_restoration_concept.png";
import videoImg from "@assets/generated_images/video_editing_timeline_interface_concept.png";
import webImg from "@assets/generated_images/modern_code_and_web_design_concept.png";

// New assets
import cleanPortrait from "@assets/generated_images/clean_vintage_portrait_of_a_woman_1950s_style.png";
import textureOverlay from "@assets/generated_images/film_dust_and_scratches_texture.png";
import wordDoc from "@assets/generated_images/modern_professional_word_document_design.png";
import pptSlide from "@assets/generated_images/creative_powerpoint_presentation_slide_design.png";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Custom Components
import { BeforeAfter } from "@/components/BeforeAfter";
import { ProjectDialog } from "@/components/ProjectDialog";

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai sous 24h.",
      duration: 5000,
    });
  };

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
    { 
      title: "Identité Visuelle Tech", 
      category: "Branding", 
      image: logoImg,
      description: "Conception complète de l'identité visuelle pour une startup technologique. Le projet comprenait la création du logo, la charte graphique, et les supports de communication imprimés.",
      tags: ["Logo", "Print", "Illustrator"],
      client: "NeoTech Solutions"
    },
    { 
      title: "Plateforme E-commerce", 
      category: "Web Dev", 
      image: webImg,
      description: "Développement d'une boutique en ligne complète avec React et intégration de paiement. Interface utilisateur fluide et optimisée pour la conversion.",
      tags: ["React", "Tailwind", "Stripe"],
      client: "Fashion Store"
    },
    { 
      title: "Campagne Publicitaire", 
      category: "Vidéo", 
      image: videoImg,
      description: "Montage dynamique pour une campagne de lancement de produit sur les réseaux sociaux. Utilisation de motion design pour capter l'attention.",
      tags: ["Premiere Pro", "After Effects", "Sound Design"],
      client: "Energy Drink Co."
    },
    { 
      title: "Présentation Corporate", 
      category: "PowerPoint", 
      image: pptSlide,
      description: "Design d'une présentation d'investissement de 20 slides. Mise en forme des données financières et création de graphiques personnalisés.",
      tags: ["PowerPoint", "Data Viz", "Infographie"],
      client: "Invest Group"
    },
     { 
      title: "Mise en Page Rapport", 
      category: "Word / PDF", 
      image: wordDoc,
      description: "Mise en page professionnelle d'un rapport annuel de 50 pages. Création de gabarits Word réutilisables pour l'entreprise.",
      tags: ["Word", "InDesign", "Typography"],
      client: "NGO International"
    },
  ];

  const processSteps = [
    { number: "01", title: "Découverte", desc: "Analyse de vos besoins et objectifs." },
    { number: "02", title: "Concept", desc: "Création de maquettes et propositions." },
    { number: "03", title: "Réalisation", desc: "Développement et design itératif." },
    { number: "04", title: "Livraison", desc: "Finalisation et support technique." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans scroll-smooth">
      
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
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Processus</a>
            <Button variant="default" className="rounded-full px-6 cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
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
                 <a href="#process" className="text-lg font-medium" onClick={toggleMenu}>Processus</a>
                <a href="#contact" className="text-lg font-medium text-primary" onClick={toggleMenu}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 mb-4 animate-pulse">
                Disponible pour freelance
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Créativité <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digitale</span> & <br/>
              Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Technique</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-lg">
              Je transforme vos idées en réalité visuelle. Graphiste expert en IA et développeur web passionné, je conçois des expériences numériques uniques qui marquent les esprits.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base h-12 px-8 cursor-pointer" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir mes travaux
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/5 cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Mes Services
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-6 text-sm text-muted-foreground">
               <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4"/> Satisfaction Client</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4"/> Délais Respectés</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4"/> Qualité Premium</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative perspective-1000"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-card/30 backdrop-blur-sm p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* Tech Stack Visualization */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 rounded-xl border border-white/5">
                        <Code className="mb-2 text-blue-400" />
                        <h4 className="font-bold">Web Dev</h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            <Badge variant="secondary" className="text-xs">React</Badge>
                            <Badge variant="secondary" className="text-xs">Next</Badge>
                            <Badge variant="secondary" className="text-xs">Node</Badge>
                        </div>
                    </div>
                    <img src={videoImg} className="rounded-lg w-full h-40 object-cover opacity-80" alt="Work 2" />
                 </div>
                 <div className="space-y-4 pt-8">
                   <img src={webImg} className="rounded-lg w-full h-40 object-cover opacity-80" alt="Work 3" />
                   <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 p-4 rounded-xl border border-white/5">
                        <Palette className="mb-2 text-pink-400" />
                        <h4 className="font-bold">Design</h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            <Badge variant="secondary" className="text-xs">Figma</Badge>
                            <Badge variant="secondary" className="text-xs">Adobe</Badge>
                            <Badge variant="secondary" className="text-xs">3D</Badge>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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

      {/* Featured Mastery Section - Photo Restoration */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl h-[400px] md:h-[500px]">
                        <BeforeAfter 
                            beforeImage={cleanPortrait}
                            afterImage={cleanPortrait}
                            overlayTexture={textureOverlay}
                            enableFilters={true}
                            className="h-full"
                        />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                        <MoveHorizontal className="w-4 h-4" /> Glissez pour voir la restauration
                    </p>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Expertise Technique</Badge>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Restauration & Retouche Avancée</h2>
                    <p className="text-muted-foreground text-lg">
                        Redonnez vie à vos souvenirs ou sublimez vos visuels produits. Grâce à une maîtrise parfaite de Photoshop et des derniers outils d'IA, je réalise des miracles sur vos images.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Suppression des rayures, taches et déchirures</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Colorisation de photos noir & blanc</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Amélioration de la netteté et de la résolution</span>
                        </li>
                    </ul>
                    <Button variant="outline" className="mt-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Demander un devis restauration
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Mon Processus de Travail</h2>
                <p className="text-muted-foreground">Une méthodologie éprouvée pour garantir le succès de votre projet.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={index} className="relative group">
                        <div className="text-6xl font-display font-bold text-white/5 group-hover:text-primary/20 transition-colors mb-4">{step.number}</div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                        {index < processSteps.length - 1 && (
                            <div className="hidden md:block absolute top-12 right-0 w-full h-[1px] bg-white/10 -z-10 translate-x-1/2"></div>
                        )}
                    </div>
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <ProjectDialog key={index} project={item}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-muted border border-white/10 hover:border-primary/50 transition-all"
                >
                    <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="w-fit mb-2 bg-primary/80 hover:bg-primary border-none">{item.category}</Badge>
                    <h3 className="text-xl font-bold font-display text-white">{item.title}</h3>
                    <div className="mt-2 text-white/80 text-sm font-medium flex items-center">
                        <Sparkles className="w-3 h-3 mr-2" /> Voir les détails
                    </div>
                    </div>
                </motion.div>
              </ProjectDialog>
            ))}
          </div>
        </div>
      </section>

      {/* Skills/Tools Ticker */}
      <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
         <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Outils & Technologies Maîtrisés</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
               {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Midjourney", "React", "TypeScript", "Tailwind CSS", "Word", "PowerPoint"].map((tool) => (
                   <span key={tool} className="text-lg md:text-xl font-display font-bold hover:text-primary transition-colors cursor-default">{tool}</span>
               ))}
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
                <a href="mailto:contact@portfolio.com" className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Nom</label>
                        <Input placeholder="Votre nom" className="bg-background/50 border-white/10" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="votre@email.com" className="bg-background/50 border-white/10" required />
                    </div>
                    </div>
                    
                    <div className="space-y-2">
                    <label className="text-sm font-medium">Sujet</label>
                    <Input placeholder="Projet de logo, Site web..." className="bg-background/50 border-white/10" required />
                    </div>
                    
                    <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Parlez-moi de votre projet..." className="min-h-[150px] bg-background/50 border-white/10" required />
                    </div>

                    <Button type="submit" className="w-full text-lg h-12">Envoyer le message</Button>
                </form>
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

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors z-50 cursor-pointer"
            >
                <ChevronUp size={24} />
            </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Needed for the MoveHorizontal icon in BeforeAfter component if not imported globally in that file, 
// but since I created a separate component file, I just need to make sure this file imports it correctly.
// I imported MoveHorizontal in the BeforeAfter component file content I wrote.
