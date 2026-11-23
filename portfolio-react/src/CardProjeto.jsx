
function CardProjeto({ nome, descricao, tecnologias, link_github, ano }) {
  return (
    <article className="card">
      <h3>{nome}</h3>

      <p className="meta">
        {tecnologias.join(", ")} · {ano}
      </p>

      <p>{descricao}</p>

      <a href={link_github} target="_blank" rel="noreferrer">
        Ver no GitHub
      </a>
    </article>
  );
}

export default CardProjeto;
