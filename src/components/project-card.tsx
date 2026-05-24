import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? {
        href: project.href,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "group flex flex-col gap-3 border border-border p-4 transition-colors",
        project.href && "hover:border-foreground/30"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-sm font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.year && (
              <span className="font-mono text-[11px] text-muted-foreground">
                {project.year}
              </span>
            )}
          </div>
          {project.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>
        {project.href && (
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="font-mono text-[10px] font-normal uppercase tracking-widest"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Wrapper>
  );
}
