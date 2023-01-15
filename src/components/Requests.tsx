import { useFetch } from '../hooks/useFetch';
import { Spinner } from './Spinner';

interface Repository {
  full_name: string;
  description: string;
}

export function Requests() {
  const {
    data: repositories,
    error,
    loading,
  } = useFetch<Repository[]>('https://api.github.com/users/izaiasmorais/repos');

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex items-center justify-center">
        <p className="font-medium">Não há itens para listar</p>
      </div>
    );
  }

  return (
    <div className="flex max-h-[600px] overflow-hidden overflow-y-auto">
      <ul className="flex flex-col gap-2">
        {repositories?.map((item, index) => (
          <li key={index}>{item.full_name} </li>
        ))}
      </ul>
    </div>
  );
}
