import './style.css';

interface usuarioType{
  nome: string;
  foto?: string;
  descricao?: string;
}




const campoUsuario = ({nome, foto, descricao}:usuarioType) => {
  
  return (
      <div className='campoUsuario'>
        <img className='foto' src={foto} alt="" />
        <section className='info'>
        <h2 className='nome'>{nome}</h2>
        <p className='descricao'>{descricao}</p>
        </section>
      </div>
  )
}

export default campoUsuario;
