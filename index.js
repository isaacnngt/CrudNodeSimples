// Importa o framework Express
const express = require("express");

// Inicializa o servidor Express
const server = express();

// Habilita o uso de JSON no servidor
server.use(express.json());

// Array que armazena os cursos existentes marretado como constantes
const cursos = ["Fullstack Master", "Desenvolvimento de Games", "Youtuber"];

/*-----------------*/
/*PESQUISAR CURSOS*/
/*----------------*/
// Rota que retorna um curso específico com base no índice fornecido nos parâmetros da requisição
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  // Retorna o curso correspondente ao índice em formato JSON
  return res.json(cursos[index]);
});

// Rota que retorna todos os cursos disponíveis
server.get("/cursos", (req, res) => {
  // Retorna a lista de cursos em formato JSON
  return res.json(cursos);
});

/*------------------*/
/*CRIAR CURSOS     */
/*----------------*/
// Rota que cria um novo curso com base nos dados fornecidos no corpo da requisição
server.post("/cursos", (req, res) => {
  // Extrai o nome do curso do corpo da requisição
  const { name } = req.body;

  // Adiciona o novo curso ao array
  cursos.push(name);

  // Retorna a lista atualizada de cursos em formato JSON
  return res.json(cursos);
});

/*------------------*/
/*ATUALIZA CURSOS  */
/*----------------*/
// Rota que atualiza um curso existente com base no índice e nos dados fornecidos no corpo da requisição
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  // Atualiza o curso correspondente ao índice no array
  cursos[index] = name;

  // Retorna a lista atualizada de cursos em formato JSON
  return res.json(cursos);
});

/*------------------*/
/*DELETA CURSOS    */
/*----------------*/
// Rota que deleta um curso com base no índice fornecido nos parâmetros da requisição
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  // Remove o curso correspondente ao índice do array
  cursos.splice(index, 1);

  // Retorna uma mensagem indicando que o curso foi deletado
  return res.json({ message: `O curso de índice ${index} foi deletado` });
});

// Rota que deleta um curso exibindo o nome dele ao ser deletado
server.delete("/cursos/delete/:index", (req, res) => {
  const { index } = req.params;

  // Armazena o nome do curso que será deletado
  const cursoDeletado = cursos[index];

  // Remove o curso correspondente ao índice do array
  cursos.splice(index, 1);

  // Retorna uma mensagem indicando que o curso foi deletado, incluindo o nome do curso
  return res.json({ message: `O curso ${cursoDeletado} foi deletado` });
});

/*------------------*/
/*SERVIDOR         */
/*----------------*/
// Ouve a porta 3001 e exibe uma mensagem no console quando o servidor estiver rodando
server.listen(3002, () => {
  console.log(
    "Servidor rodando na porta 3002 - http://localhost:3002/cursos/<nome_da_acao>"
  );
});
