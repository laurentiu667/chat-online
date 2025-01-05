import { useEffect, useState } from 'react';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import './App.css';

interface DataFetch {
    message: string;
}

function App() {
    const [data, setData] = useState({} as DataFetch);
  

  useEffect(() => {

    fetch("http://localhost:8000/server/action/mainAction.php", {
       
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data);

    })
  }, []);

  return (
    <>
        <Header />
        <main>
            <h1>Home</h1>
            <p>data : {data.message}</p>
        </main>
        <Footer />
    </>
  );
}

export default App;