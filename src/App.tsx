import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import './App.css';
import { QUERY_USER } from './utils/graph_queries';
import { User } from './utils/Models'

function App() {
  const { loading, error, data } = useQuery(QUERY_USER)
  const [ user, setUser ] = useState<User | null>(null)

  useEffect(() => {
    if (!loading && data) {
      setUser(data.fetchUser)
    }
  }, [data, loading])

  console.log(data.fetchUser, error, loading)

  return (
    <div className="App">
      <header>

      </header>
    </div>
  );
}

export default App;
