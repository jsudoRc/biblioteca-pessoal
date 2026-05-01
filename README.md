# Biblioteca Pessoal

Projeto prático em **TypeScript** desenvolvido como um gerenciador de biblioteca pessoal em console.

O objetivo do exercício é praticar os conceitos vistos nas primeiras aulas de programação, como:

- Git e GitHub
- Node.js e npm
- TypeScript com tipagem explícita
- Controle de fluxo com `if`, `else` e validações
- Funções reutilizáveis
- Arrays e métodos como `forEach`, `filter`, `map` e `reduce`

## Visão geral

Este projeto mantém os livros em **arrays paralelos**, onde cada posição representa o mesmo livro em todos os vetores:

- `titulos`
- `autores`
- `anos`
- `paginas`
- `lido`
- `avaliacoes`

Assim, o índice `0` de todas as arrays representa o primeiro livro, o índice `1` representa o segundo e assim por diante.

O programa exibe a biblioteca no console, permite buscas, marca leitura, calcula estatísticas e organiza os livros por década.

## Estrutura do projeto

```text
biblioteca-pessoal/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/privatenumber/tsx) para executar o arquivo `.ts` em modo watch

## Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

### 3. Gerar a versão compilada

```bash
npm run build
```

### 4. Executar a versão compilada

```bash
npm start
```

## Funcionalidades implementadas

### Exibição da biblioteca

Mostra todos os livros cadastrados com:

- título
- ano
- autor
- páginas
- status de leitura
- avaliação

### Cadastro e remoção

- `addLivro(...)` adiciona um novo livro nas arrays paralelas
- `rmvLivro()` remove o último livro cadastrado

### Busca e filtros

- `buscarPorTitulo(termo)` procura um título exato
- `buscarPorAutor(autor)` lista os livros de um autor usando combinação de `map` e `filter`
- `listarLidos()` mostra apenas os livros lidos
- `listarPendentes()` mostra apenas os livros ainda não lidos

### Controle de leitura

- `marcarComoLido(titulo, avaliacao)` marca um livro como lido e salva sua nota

### Estatísticas

- `totalLivros()`
- `totalLidos()`
- `percentualLidos()`
- `mediaAvaliacoes()`
- `livroMaiorAvaliacao()`
- `totalPaginasLidas()`

### Classificação por década

- `exibirPorDecada()` agrupa os livros de acordo com a década do ano de publicação

## Métodos de array usados no projeto

O projeto foi uma boa oportunidade para praticar os principais métodos de arrays:

- `forEach` para percorrer e exibir elementos
- `filter` para selecionar livros que atendem a uma condição
- `map` para transformar dados e montar listas derivadas
- `reduce` para calcular estatísticas e descobrir o maior valor

## Como o projeto está organizado

O arquivo principal `src/index.ts` concentra a lógica do sistema e trabalha com dados iniciais já cadastrados no próprio código. Ao executar o projeto, a aplicação imprime no console:

- a lista completa da biblioteca
- estatísticas da coleção
- o livro melhor avaliado
- o total de páginas lidas
- a classificação por década

## Exemplo de saída

```text
=========================
MINHA BIBLIOTECA
=========================
1. Harry Potter e a Pedra Filosofal (1997) - J.K. Rowling - 263 pag - LIDO (5/5)
2. Percy Jackson e o Mar de Monstros (2006) - Rick Riordan - 304 pag - LIDO (4/5)

ESTATISTICAS
Total livros lidos: 6
Livros lidos: 5 (83.33%)
Media das avaliações: 2.80
O livro melhor avaliado é: Harry Potter e a Pedra Filosofal com 5 estrelas de 5
Total paginas lidas: 1843

POR DECADA
1990s: Harry Potter e a Pedra Filosofal, Harry Potter e a câmara secreta
2000s: Percy Jackson e o Mar de Monstros, Percy Jackson e o Ladrão de Raios
2010s: O Algebrista, Matemática para Vencer
```

> A saída pode variar conforme os dados cadastrados e as funções que forem chamadas no final do `index.ts`.

## Observações importantes

- O projeto usa **arrays paralelas** em vez de objetos ou interfaces para reforçar o aprendizado de arrays e índices.
- A sincronia entre os arrays é essencial: o mesmo índice deve sempre representar o mesmo livro em todas as listas.
- Algumas funções foram adaptadas ao longo do desenvolvimento para praticar diferentes métodos de array e controle de fluxo.

## Autor

- **Aluno(a):** _Julio César Rodrigues da Silva_

## Licença

Projeto acadêmico desenvolvido para fins de estudo