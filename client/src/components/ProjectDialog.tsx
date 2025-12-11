import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ExternalLink, Calendar, User, Layers } from "lucide-react";

interface ProjectDialogProps {
  children: React.ReactNode;
  project: {
    title: string;
    category: string;
    image: string;
    description?: string;
    date?: string;
    client?: string;
    tags?: string[];
  };
}

export function ProjectDialog({ children, project }: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card border-white/10 p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-64 md:h-full bg-muted relative">
             <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
             />
          </div>
          <div className="p-6 flex flex-col h-full">
            <DialogHeader className="mb-4">
              <Badge className="w-fit mb-2 bg-primary/20 text-primary hover:bg-primary/30 border-none">{project.category}</Badge>
              <DialogTitle className="text-2xl font-display font-bold">{project.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 flex-grow">
              <p className="text-muted-foreground leading-relaxed">
                {project.description || "Un projet complet démontrant l'expertise technique et créative, réalisé avec soin et attention aux détails pour répondre aux besoins spécifiques du client."}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center text-sm">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-muted-foreground mr-2">Client:</span>
                  <span className="font-medium">{project.client || "Confidentiel"}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-muted-foreground mr-2">Année:</span>
                  <span className="font-medium">{project.date || "2024"}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Layers className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-muted-foreground mr-2">Services:</span>
                  <span className="font-medium">{project.tags?.join(", ") || "Design, Développement"}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-auto">
              <Button className="w-full gap-2">
                Voir le projet en ligne <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
