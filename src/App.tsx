import { useState } from 'react';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import './App.css';


// que contient un utilisateur
interface DataUser {
  id: number;
  username: string;
  password: string;
}

// l objet retourner 
interface DataFetch {

  // ici l objet retourner contient
  utilisateurs: { id: number; psw: string; username: string }[];  
}

function App() {
	
  	const [data, setData] = useState<DataFetch>({ utilisateurs: [] });
  	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");

  	const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  	  setUsername(event.target.value);
  	}

  	const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  	  setPassword(event.target.value);
  	}

  	const confirmRegister = () => {
  	  let formData = new FormData();
  	  formData.append("username", username);
  	  formData.append("password", password);

  	  fetch("http://localhost:8000/server/action/registerAction.php", {
  	    method: 'POST',
  	    body: formData
  	  })
  	  .then(response => response.json())
  	  .then((data: DataFetch) => {
  	    setData(data);
  	
  	    data.utilisateurs.forEach((user) => {
  	      const id = user.id;
  	      const username = user.username;  
  	      const password = user.psw;  

  	      console.log("ID:", id);
  	      console.log("Username:", username);
  	      console.log("Other Field:", password); 
  	    });
  	  })
  	  .catch((error) => {
  	    console.error("Erreur lors de la récupération des données:", error);
  	  });
  	}

  	return (
  	  <>
  	    <Header />
  	    <main>
  	      <input 
  	        onChange={handleUsernameInput} 
  	        type="text" 
  	        name="username" 
  	        id="username" 
  	        value={username} 
  	      />
  	      <input 
  	        onChange={handlePasswordInput} 
  	        type="password" 
  	        name="password" 
  	        id="password" 
  	        value={password} 
  	      />
  	      <button type="submit" onClick={confirmRegister}>Register</button>

  	      <h1>
  	      
  	        {data.utilisateurs.map((user, index) => (
  	          <div key={index}>
  	            ID: {user.id}, Username: {user.username}, Password: {user.psw}
  	          </div>
  	        ))}
  	      </h1>
  	    </main>
  	    <Footer />
  	  </>
  	);
}

export default App;
