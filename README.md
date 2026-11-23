## API em Node

Uma segunda versão da API, em JavaScript, na pasta `api-node/`.
O contrato de `GET /api/projetos` é o mesmo de `api/projetos.php`, e o de `GET /api/tecnologias` é o mesmo de `api/tecnologias.php`.


sudo service mariadb start
sudo mysql < sql/setup.sql
sudo mysql < sql/usuarios.sql
cd api-node
npm install
node criar-usuario.js seu@email.com suasenha
node server.js

A API sobe em http://localhost:3000. Nas respostas abaixo, aparecem só a linha de status e o corpo.



curl -i http://localhost:3000/api/projetos

curl -i http://localhost:3000/api/tecnologias


curl -i -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"seu@email.com","senha":"suasenha"}'

{"token":"<TOKEN>"}


Guarde o valor de `token` numa variável do terminal: `TOKEN=<TOKEN>`. Ele vale por 2 horas.

curl -i -X POST http://localhost:3000/api/projetos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"nome":"Projeto de teste","ano":2026}'

curl -i -X PUT http://localhost:3000/api/projetos/ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"nome":"Projeto de teste (editado)","ano":2026}'

curl -i -X DELETE http://localhost:3000/api/projetos/ID \
  -H "Authorization: Bearer $TOKEN"

curl -i -X DELETE http://localhost:3000/api/projetos/ID

O front busca os projetos e o catalogo na API em Node, com fetch dentro de um useEffect. O endereco da API fica em src/api.js. O arquivo src/projetos.js saiu: os dados moram no banco.

Para a tela mostrar os dados, a API precisa estar de pe, com a porta 3000 em Public:

sudo service mariadb start
cd api-node
node server.js
