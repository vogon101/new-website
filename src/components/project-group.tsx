import { ProjectCard } from "@/components/project-card";
import type { ProjectGroup as ProjectGroupType } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectGroup({ group }: { group: ProjectGroupType }) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
          {group.label}
        </h2>
        <p className="text-sm text-muted-foreground">{group.description}</p>
      </div>
      <div
        className={cn("grid gap-3", group.fullWidth ? "grid-cols-1" : "sm:grid-cols-2")}
      >
        {group.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
