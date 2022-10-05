import { useFetch } from "./hooks/useFetch";

type Repository = { 
  full_name: string;
  description: string; 
}

function App() {
  const { data: repositories, error, isFetching } = useFetch<Repository[]>('users/LucasJacinto/repos')

  return (
    <div className="App">
      <div>
        <h1>Consumindo API usando hook personalizado</h1>
        <ul>
          { error && <p>Erro na consulta</p>}
          { isFetching && <p>Carregando...</p>}
          {repositories?.map(repo => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>      
    </div>
  )
}

export default App
