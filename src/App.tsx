import { useEffect, useState } from 'react';
import './App.css';
import githubLogo from './assets/images/icons8-github-100.png';
import lupa from './assets/images/Vector.png';
import campoUsuario from './components/campoUsuario';

interface usuarioType{
  nome: string;
  foto?: string;
  descricao?: string;
}

const App = () => {
  
  const [pesquisa, setPesquisa] = useState("")

  const atualizarPesquisa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };
  
  function pesquisarUsuario(){
    if(pesquisa === ""){
      alert("Campo de pesquisa Vazio")
      return console.log("Campo de pesquisa Vazio")
    }
    
    return console.log("Sucesso")
  }

  return (
    <main>
      <div className='container'>
        <img src={githubLogo} alt="" />
        <h1>Perfil</h1>
      <h1>GITHUB</h1>
      </div>
      <div className='campoPesquisa'>
        <input value={pesquisa} onChange={atualizarPesquisa} type="text" placeholder='Digite o nome do usuário' />
        <button onClick={pesquisarUsuario}><img src={lupa} className='lupa' /></button>
      </div>
      
    </main>
  )
}

export default App
