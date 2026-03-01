"use client";

import { Badge } from "@/components/ui";
import { Award, Users, Briefcase, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Full Client Lifecycle",
    description:
      "From initial pre-sales conversations through requirements gathering, weekly demos, go-live, and ongoing support — I own the full journey.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Currently leading 2 offshore teams and 1 onshore developer across concurrent projects with daily syncs and hands-on development contributions.",
  },
  {
    icon: Award,
    title: "Microsoft Certified",
    description:
      "Azure Developer Associate certified with daily production experience in App Services, Functions, Static Web Apps, DevOps, and Data Factory.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <h2 className="mb-6 max-w-2xl">
              Engineer. Leader.{" "}
              <span className="gradient-text">Problem Solver.</span>
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack engineer at a startup consultancy, building
                production-ready systems for client projects. My work spans the
                entire stack — from React frontends and Node.js APIs to Azure
                cloud infrastructure and enterprise system integrations.
              </p>
              <p>
                I've taken on a range of roles across projects, including{" "}
                <span className="text-foreground font-medium">
                  lead developer working from architecture specs
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  owning and completing partially built systems
                </span>
                , and{" "}
                <span className="text-foreground font-medium">
                  collaborating with offshore teams across time zones
                </span>
                . These experiences have strengthened my ability to deliver
                reliable, scalable solutions in fast-paced environments.
              </p>
              <p>
                In addition to development, I manage technical pre-sales —
                including{" "}
                <span className="text-foreground font-medium">
                  scoping, architecture design, proposals, and effort estimation
                </span>{" "}
                — giving me a strong understanding of both the technical and
                business sides of delivery. I'm always looking for opportunities
                where I can build impactful systems, take ownership, and
                continue growing as an engineer.
              </p>
              <a
                href="/resume/Erik-Benedict-Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-accent-600 font-medium hover:text-accent-700 transition-colors group"
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="space-y-8">
              {/* Highlight cards */}
              <div className="space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border bg-white p-5 shadow-sm"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
