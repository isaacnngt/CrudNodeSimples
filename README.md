# CRUDS Simples com Node JS 🚀

## 1. Sobre o projeto

`O que é um CRUD?`
Acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados). São as 4 operações principais em todo projeto.

Resumo do CRUD:
- Primeiro: Cadastro de um curso
- Segundo: Lista todos os cursos
- Terceiro: lista apenas um curso
- Quarto: Deleta um curso
- Quinto: Atualiza nome de um curso
 

### 2 Ferramentas usadas 

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
 `Insomnia` | Interface gráfica para realizar os testes, pode-se utilizar o postaman se preferir|

### 3 Como rodar cada projeto

Para usar cada projeto, faça o clone do repositório para sua máquina local e após rode os seguientes comandos pelo terminal (windows ou Vscode): 

```
npm init -y
```

Para baixar as dependencias do express:

```
npm install express
```

Para baixar as dependencias npm:

```
npm install
```

Para iniciar o projeto:

```
npm start
```

### 4 Comportamento de cada ação e teste do CRUD

Endpoint genérico: http://localhost:3002/cursos/

| Ferramenta | Descrição |
| --- | --- |
| `GET => http://localhost:3002/cursos/` | Deverá listar todos os cursos. |
| `GET => http://localhost:3002/cursos/1` | Deverá listar um curso pelo seu id. |
| `PUT => http://localhost:3002/cursos/1` | Deverá atualiza um curso pelo id.|
| `POST => http://localhost:3002/cursos` | Deverá criar um novo curso.|
| `DELETE => http://localhost:3002/cursos/1` | Deverá deletar um curso pelo id.|
| `DELETE => http://localhost:3002/cursos/delete/2` | Deverá atualiza um curso pelo id e ao deletar exibirá o nome do curso que foi excluído.|

### 5 Alguns esquemas para testes no Insomnia ou Postman


- PUT: Atualização do curso

```
{	
	"name" : "Desenvolvimento de Jogos"
}
```
- POST: Criação de um novo curso
```
{
	"name": "Licenciatura em Computacao"
}
```

## 5. Lições aprendidas

### 5.1 - Procurando direitinho tem muito conteúdo incrível no youtube 

A ideia original desses projetinhos foram retiradas desse tutorial no youtube e melhorado posteriormente: (https://www.youtube.com/watch?v=hgFQgtsYG30)

---
## Isaac Nunes
- [instagram](https://www.instagram.com/isaacnngt)
- [linkedin](https://www.linkedin.com/in/isaacnngt/)
- [github](https://github.com/isaacnngt)

> Me enviem feedbacks sobre esse repositorio isaacnngt@gmail.com Vou amar trocar ideias com vocês. É isso! Até a próxima!
