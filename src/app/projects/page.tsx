import { redirect } from "next/navigation";

export default function ProjectsIndex() {
  // Redirect to the Projects section on the home page
  redirect("/#projects-section");
}
