import { useEffect, useState } from 'react';
import './App.css';
import githubLogo from './assets/images/icons8-github-100.png';
import github from './assets/images/github-white-logo-d748.svg';
import lupa from './assets/images/Vector.png';
import CampoUsuario from './components/campoUsuario/CampoUsuario';
import FalhaNaPesquisa from './components/falhaNaPesquisa/FalhaNaPesquisa';

import axios from 'axios';

interface usuarioType{
  nome: string;
  foto?: string;
  descricao?: string;
}

interface estadoType{
  sucesso: boolean;
  erro: boolean;
  neutro: boolean;
}

const App = () => {
  
  const [pesquisa, setPesquisa] = useState("")
  const [usuario, setUsuario] = useState<usuarioType>({
    nome: "",
    foto: "",
    descricao: ""
  })
  const [estadoDeTela, setEstadoDeTela] = useState<estadoType>({
    sucesso: false,
    erro: false,
    neutro: true
  })

  const atualizarPesquisa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };
  
  async function pesquisarUsuario(){
    if(pesquisa === ""){
      alert("Campo de pesquisa Vazio")
      return setEstadoDeTela({sucesso: false, erro: false, neutro: true})
    }
    try {
      const response = await axios.get(`https://api.github.com/users/${pesquisa}`);
      setUsuario({
        nome: response.data.login,
        foto: response.data.avatar_url,
        descricao: response.data.bio
      })
      setEstadoDeTela({sucesso: true, erro: false, neutro: false})
      return usuario;
    } catch (error) {
      return setEstadoDeTela({sucesso: false, erro: true, neutro: false})
    }
  }

  return (
    <main>
      <div className='container'>
        <img src={githubLogo} alt="" />
        <h1>Perfil</h1>
      <img className='github' src={github} alt="" />
      </div>
      <div className='campoPesquisa'>
        <input value={pesquisa} onChange={atualizarPesquisa} type="text" placeholder='Digite o nome do usuário' />
        <button onClick={pesquisarUsuario}><img src={lupa} className='lupa' /></button>
      </div>
      {estadoDeTela.sucesso && <CampoUsuario nome={usuario.nome} foto={usuario.foto} descricao={usuario.descricao}/>}
      {estadoDeTela.erro && <FalhaNaPesquisa/>}
    </main>
  )
}

export default App
