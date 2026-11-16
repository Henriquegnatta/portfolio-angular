import Cabecalho from './Cabecalho.jsx';
import CardProjeto from './CardProjeto.jsx';
function App() {
  return (
    <> <Cabecalho />
<main>
    <h2>Projetos</h2>
    <div className="cards">
      <CardProjeto nome="Portfolio Angular"
      descricao="Meu portfolio com Angular e Angular Material."
      tecnologias="Angular, TypeScript"
      link_github="https://github.com/seu-usuario/2026-DWII-portfolio-"
      ano={2026}
          />
        </div>
      </main>
    </>
  );
}export default App;