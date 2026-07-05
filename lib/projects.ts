export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "production" | "internship" | "in-progress" | "student project" | "graduation" | "personal";
  period: string;
  stack: string[];
  role: string;
  problem: string;
  approach: string[];
  highlights: string[];
  challenges: { title: string; detail: string }[];
  result: string;
  links: { label: string; href: string }[];
};

import { projects as contentProjects } from "../content/projects";

export const projects: Project[] = contentProjects;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
