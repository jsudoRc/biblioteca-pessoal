//Defining the core arrays 

const titulos : string [] = [];
const autores : string [] = [];

const lido : boolean [] = [];

const anos : number [] = [];
const paginas : number [] = [];
const avaliacoes: number [] = [];

titulos.push(
    'Harry Potter e a Pedra Filosofal',
    'Percy Jackson e o Mar de Monstros',
    'O Algebrista',
    'Matemática para Vencer',
    'Harry Potter e a câmara secreta',
    'Percy Jackson e o Ladrão de Raios'
)

paginas.push(
       263,
       304,
       700,
       640,
       252,
       384
)

autores.push(
    'J.K. Rowling',
    'Rick Riordan',
    'Laércio Vasconcelos',
    'Laércio Vasconcelos',
    'J.K.Rowling',
    'Rick Riordan'
)

lido.push(
    true,
    true,
    false,
    true,
    true,
    true
)
 
anos.push(
    1997,
    2006,
    2016,
    2018,
    1998,
    2005
)

avaliacoes.push(
    5,
    4,
    5,
    2,
    3,
    4
)

function draw():void{
    console.log("===============================================")
}
//---------------------------------------------
//Foi uma forma de exibir a biblioteca que eu achei , sem usar forEach
//Não vou usar ela aqui, mas deixo esse comentário só para eu 
// lembrar deperguntar para o professor depois, se ela é valida ! 

// function exibirBiblioteca():void{

//      draw()
//      console.log('MINHA BIBLIOTECA')
//     for(let i:number = 0;  6> i ;i++ ){

        
//        let check:string  = lido[i] === true? 'LIDO' :'PENDENTE' 
       
//     console.log(`${i+1}.${titulos[i]}(${anos[i]})-${autores[i]}-${paginas[i]}pag-${check}(${avaliacoes[i]}/5)`)

//     }
//     draw()
// }
//------------------------




