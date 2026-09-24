const express = require('express');
const cors = require('cors');
const app = express();

const PORTA = 3000;
app.use(cors());
const projetos = [
    {
        id:1,
        nome:'Portfolio Angular',
        descricao:'Meu portfolio com Angular e Angular Material.',
        tecnologias:'Angular, TypeScript',
        link_github:'http://github.com/Henriquegnatta/2026-DWII-portfolio-angular',
        ano:2026
    },
    {
        id:2,
        nome:'API do Portfolio em PHP',
        descricao:'Endpoints de projetos e catalogo  com PDO e MariaDB.',
        tecnologias:'PHP, MariaDB',
        link_github:null,
        ano:2026
    },
    {
        id:3,
        nome:'Sistema de Cadastro v1',
        descricao:'CRUD em php do 1o Trimestre.',
        tecnologias: 'PHP,MariaDB,Bootstrap',
        link_github:null,
        ano:2026
    }
];
const tecnologias =[
    {
    id:1,
    nome:'HTML',
    tecnologia:'Frontend',
    descricao:'Linguagem de marcacao para estrutura de paginas.',
 ano:'1993'
    },{
    id:2,
    nome:'CSS',
    tecnologia:'Frontend',
    descricao:'Linguagem de estilos para apresentacao visual.',
    ano:'1996'
    },{
      id:3,  
    nome:'JavaScript',
    tecnologia:'Frontend',
    descricao:'Linguagem de programacao para o navegador.',
    ano:'1995'
    },{
        id:4,
        nome:'PHP',
    tecnologia:'Backend',
    descricao:'Linguagem server-side para web dinamica.',
    ano:'1994'
    }

];

app.get('/',(req,res)=>{
    res.send('API do portfolio em Node: no ar');
});

app.listen(PORTA, () => {
    console.log('API no ar em http://localhost:' + PORTA);
});
app.get('/api/projetos',(req, res) =>{
    res.json(projetos);
});

app.get('/api/tecnologias',(req, res) =>{
    res.json(tecnologias);
});
