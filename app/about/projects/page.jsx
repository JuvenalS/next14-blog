import { Suspense } from "react";
import ProjectsList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export const metadata = {
  title: "Projects",
};


export default async function ProjectsPage() {

  return (
    <div>
      <h1 className="mb-8 text-xl">Projects</h1>
      <div className="mb-8">Hello, this is the list of my repos!</div>
      <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectsList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}