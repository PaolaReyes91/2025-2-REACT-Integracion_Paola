import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] =useState (null);

  useEffect(() => { 
    setIsLoading (true);
    setError(null);

    fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=> {
      if (!response.ok){
        throw new Error (`Error ${response.status}: No existe usuario asociado al Id:`);
      }
      return response.json();
    })
    .then(data =>{
      setUser(data);
      setIsLoading (false);
    })
    .catch((err)=>{
      console.log("Detalle de error", err.message);
      setError(err.message);
      setIsLoading (false);
    })   
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      <h1>
        <p>{user.name}</p>
      </h1>
    </div>
  );
}