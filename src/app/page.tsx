import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/social-links";
import { ProjectGroup } from "@/components/project-group";
import { projectGroups } from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="space-y-5">
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Freddie Poser
        </h1>
        <SocialLinks />
      </header>

      <Separator className="my-10" />

      <div className="space-y-10">
        {projectGroups.map((group) => (
          <ProjectGroup key={group.label} group={group} />
        ))}
      </div>

      <Separator className="my-10" />

      <footer className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">&copy; {new Date().getFullYear()}</span>
        <span className="font-mono tracking-wide">FP</span>
      </footer>
    </main>
  );
}
