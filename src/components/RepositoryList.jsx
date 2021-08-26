import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'Repository 1',
  description: 'Repository 1 description',
  link: 'https://github.com',
};

export function RepositoryList() {
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
