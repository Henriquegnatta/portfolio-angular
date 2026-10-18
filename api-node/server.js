const express = require('express');
const cors = require('cors');
const app = express();
const  pool = require('./db')

const PORTA = 3000;
app.use(cors());

const projetos = [
    { id: 1,
    nome:'Portfolio Angular',
    descricao:'Meu portifolio com Angular e Angular Material',
    tecnologias:'Angular, TypeScript',
    link_github:'https://github.com/Henriquegnatta/portfolio-angular',
    ano:2026
},
{
    id:2,
    nome:'API do Portfolio de PHP',
    descricao:'Endpoints de projetos e catalagos com PDO e MariaDB.',
   tecnologias:'PHP, MariaDB, Bootstrap',
    link_github:null,
    ano:2026
},
{
    id:3,
    nome:'Sistema de Cadastro v1',
    descricao: 'CRUD em PHP do 1o trimestre',
    tecnologias:'PHP,MariaDB, Bootstrap',
    link_github:null,
    ano:2026
}
];

app.get('/',(req,res)=>{
    res.send('API do portfolio em Node: no ar');
});
app.get('/api/projetos',async(req, res)=>{
    try{
        const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE status = 'publicado' ORDER BY  ano DESC, id";  
        const [projetos] = await pool.query(sql);
        res.json(projetos);
   
    }catch (erro){
        res.status(500).json({erro:"Falha no servidor" + erro.mensagem});
    }


});
app.get('/api/projetos/:id', async (req, res) =>{
   try{
    const sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE id = ? AND status = 'publicado'";
    const [linhas] = await pool.execute(sql, [req.params.id]);
    if (linhas.length === 0){
        return res.status(404).json({erro:'Projeto nao encontrado'});
    }

  res.json(linhas[0]);

 } catch (erro){
        res.status(500).json({erro:"Falha no servidor" + erro.mensagem});
    }
});

app.listen(PORTA, () => {
 console.log('API no ar em http://localhost:' + PORTA);
});


app.get('/api/tecnologias', async (req, res) =>{
    try{
    const sql = "SELECT id, nome, categoria,descricao,ano_criacao FROM tecnologias WHERE status ='ativo' ORDER BY categoria, nome";
    const [tecnologias] = await pool.query(sql);
    res.json(tecnologias);
    }catch (erro){
        res.status(500).json({erro:"Falha no servidor" + erro.mensagem});
    }
});
