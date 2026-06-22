import { getPosts } from "@/utils/utils";
import { DynamicProjects } from "@/components/DynamicContent";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  return <DynamicProjects allProjects={allProjects} range={range} />;
}
