import Card from "@/components/card";

export default async function ProjectsList() {
  const response = await fetch(
    "https://api.github.com/users/JuvenalS/repos"
    //{ cache: "no-store"}
  );
  const repos = await response.json();
  //throw new Error("oops")

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{repo.name}</div>
              <div>&#127775;{repo.stargazers_count}</div>
            </div>
            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
