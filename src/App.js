import {useEffect,useState} from 'react';
import axios from 'axios'; // Adicionando o axios
import './App.css';

function App() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{ // Consumindo Api
    axios.get('http://localhost/Projetos-PHP/Api-Teste-PHP/')
    .then(function(api){
      setPosts(api.data);
    })

  },[])

  return ( // Exibindo os itens da Api
    <div className="App">
      {
        posts.map(function(itens){
          return(
            <div className="conteudo">
                <img src={itens.imagem}/>
                <p>{itens.conteudo}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
