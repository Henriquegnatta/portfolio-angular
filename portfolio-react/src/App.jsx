import {useEffect, useState} from 'react';
import API from './api.js';
import Cabecalho from './Cabecalho.jsx';
import CardProjeto from './CardProjeto.jsx';
import Rodape from './Rodape.jsx';
import Contato from './Contato.jsx';
function App() {
  const [projetos,setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [ erro, setErro] = useState('');


async function buscarProjetos(){
  try{
  const resposta = await fetch(API + '/api/projetos');
  if(!resposta.ok){
    throw new Eror('a API respondeu' + resposta.status);
  }
  const dados = await resposta.json();
  setProjetos(dados);}
  catch(falha){
    setErro('Nao deu para carreagar os projetos' + falha.menssage);
  }
  setCarregando(false);
}

useEffect(() =>{
  buscarProjetos();
}, []);
  return (
    <>
      <Cabecalho />

      <main>
        <h2>Projetos</h2>
        {carregando &&<p>Carregando projetos...</p>}
        {erro && <p className="erro">{erro}</p>}
        <div className="cards">
          {projetos.map((p) => (
            <CardProjeto
              key={p.id}
              nome={p.nome}
              descricao={p.descricao}
              tecnologias={p.tecnologias}
              link_github={p.link_github}
              ano={p.ano}
            />
          ))}
        </div>

        <Contato />
      </main>

      <Rodape />
    </>
  );
}

export default App;
