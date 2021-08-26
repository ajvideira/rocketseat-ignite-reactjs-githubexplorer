import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const repository = {
  name: "Repository 1",
  description: "Repository 1 description",
  link: "https://github.com",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ajvideira/repos")
      .then((response) => response.json())
      .then((json) => setRepositories(json));
  }, []);

  console.log("Repositories: ", repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
