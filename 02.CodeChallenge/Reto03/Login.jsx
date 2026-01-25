import { useState } from 'react';

export default function Login() {
    const [password, setPassword] = useState("");
    const SECRET_KEY = "reto03"
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem("user_auth") === "true";
    });


  const handleLogin = () => {
    if (password === SECRET_KEY){
        setIsAuth(true);
        localStorage.setItem("user_auth", "true");
    } else {
        alert ("Contraseaña Incorrecta"); 
        setPassword ("");   
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("user_auth");
  };

 if (isAuth)  {
    return (
      <div>
        <h1>Bienvenido al club secreto ✨</h1>
        {/* Contenido especial aquí */}
        <button onClick={handleLogout}>Salir</button>
      </div>
    );
}

  return (
    <div>
      <h2>Acceso restringido</h2>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>

    </div>
  );
}