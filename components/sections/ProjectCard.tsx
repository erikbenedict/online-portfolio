import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
} from "@/components/ui";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card className="group overflow-hidden">
        {/* Project Image */}
        <div className="relative h-64 w-full overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
              <p className="text-4xl font-bold text-primary-300">
                {project.title.charAt(0)}
              </p>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {project.category === "full-stack"
                ? "Full-Stack"
                : project.category === "cloud"
                  ? "Cloud/Backend"
                  : "Frontend"}
            </Badge>
          </div>
        </div>

        {/* Project Content */}
        <CardHeader>
          <CardTitle className="group-hover:text-accent-600 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="font-semibold text-foreground">
            {project.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <span className="text-sm font-medium text-accent-600 group-hover:underline flex items-center gap-1">
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
