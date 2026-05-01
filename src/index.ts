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
       0,
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
    0,
    2,
    3,
    4
)

function draw():void{
console.log("=================================================================================")
}

function libraryMenu():void{
    console.log('MINHA BIBLIOTECA')
    draw()
}

//---------------------------------------------
//Foi uma forma de exibir a biblioteca que eu achei , sem usar forEach
//Não vou usar ela aqui, mas deixo esse comentário só para eu 
// lembrar de perguntar para o professor depois, se ela é valida ! 

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

function exibirBiblioteca():void{

    draw()
    libraryMenu()


//Como indice principal para as arrays paralelas, vou usar o titulo
    titulos.forEach((titulo:string,i:number)=> {

        let leu:string  = lido[i] === true? 'LIDO' :'PENDENTE'
        console.log(`${i+1}.${titulo} (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${leu} (${avaliacoes[i]}/5)`)
  
    }); 

    draw()
}



 function addLivro(titulo:string,
                   ano:number, 
                   autor:string,
                   pag:number,
                   lestes:boolean,
                   avaliacao:number):void{

          
            if(ano > 0 && pag > 0 && avaliacao<=5 && avaliacao>=0){
            titulos.push(titulo)
            anos.push(ano)
            autores.push(autor)
            paginas.push(pag)
            lido.push(lestes)
            avaliacoes.push(avaliacao)

            draw()
            console.log('SUCESSO!LIVRO ADICIONADO')
            console.log('------------------------')
            exibirBiblioteca()

            }
            else{
                console.log('Ano,páginas ou numero de avalialçao foram inseridos incorretamente,tente novamente')
            }
 }
  
 //Remove o ultimo livro da lista
 function rmvLivro():void{

            titulos.pop()
            anos.pop()
            autores.pop()
            paginas.pop()
            lido.pop()
            avaliacoes.pop()     
            
            exibirBiblioteca()
 }

function buscarPorTitulo(filtrotitulo:string):void{
 
    if(titulos.includes(filtrotitulo) ===true){

        console.log('TEMOS ESTE LIVRO NA BIBLIOTECA !')
        draw()

        const i:number = titulos.indexOf(filtrotitulo)
        let leu:string  = lido[i] === true? 'LIDO' :'PENDENTE'        
        console.log(`${i+1}.${titulos[i]} (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${leu} (${avaliacoes[i]}/5)`)

    }
    else{
        console.log('Oops...Livro não encontrado...')
    }
  
}

function buscarPorAutor(filtroAutor:string):void {

      const indices = autores
        .map((autor, i) => autor === filtroAutor ? i : -1)
        .filter(i => i !== -1);

    
    if(indices.length > 0){
        console.log('TEMOS LIVROS DESSE AUTOR')
        draw()

             indices.forEach(i => {
            let leu: string = lido[i] ? 'LIDO' : 'PENDENTE'
            console.log(`${i+1}.${titulos[i]} (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${leu} (${avaliacoes[i]}/5)`)
        })
    }else{

         console.log('Oops...Livro não encontrado...');
    }

}
    function listarLidos(): void{
    
    
    titulos.forEach((titulo:string,i:number)=> {

        let leu:string  = lido[i] === true? 'LIDO' :'PENDENTE'

        if(leu != 'PENDENTE'){
    
        
        console.log(`${i+1}.${titulo} (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${leu} (${avaliacoes[i]}/5)`)
        }

    }); 
        
   }

     function listarPendentes(): void{

        
        titulos.forEach((titulo:string,i:number)=> {

        let leu:string  = lido[i] === true? 'LIDO' :'PENDENTE'

        if(leu != 'LIDO'){
    
        
        console.log(`${i+1}.${titulo} (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${leu} (${avaliacoes[i]}/5)`)
        }

    }); 
     }
  
    function marcarComoLido(titulo:string, avaliacao:number):void{
        
        if(titulos.includes(titulo)){
           
            if(avaliacao >= 1 && avaliacao <=5){

                const indice:number = titulos.indexOf(titulo);

                lido[indice] = true;

                avaliacoes[indice] = avaliacao;

                exibirBiblioteca()
            }else{
                console.log('Numero de avaliação inválida !')
            }
        }else{
            console.log('Este livro não esta na biblioteca!')
        }
    }

    function staticMenu():void{
        console.log('ESTATISTICAS')
        draw()
    }

    function totalLivros():number{

        return titulos.length
    }
    
    function totalLidos():number{

        let acumulador = 0

        lido.forEach((status) =>{

            if(status === true){

                acumulador++
            }
        })
        return acumulador
    }

    function percentualLidos():number{

          return (totalLidos()/totalLivros())*100
    }

    function mediaAvaliacoes():number{

    let media:number = avaliacoes.filter((n)=> n>0 )
                                  .reduce((soma,ava,_,arr)=> soma+ava/ arr.length,0)

     return media
    }
    
    function livroMaiorAvaliacao():string {

     const melhor = avaliacoes.reduce((acc, nota, i) => {
        if (nota > acc.nota) {
            return { nota: nota, indice: i }
        }
        return acc
    }, { nota: -1, indice: -1 })

    if (melhor.indice === -1) {
        return 'Nenhum livro avaliado encontrado...'
    }
        
        return  `O livro melhor avaliado  é: ${titulos[melhor.indice]} com  ${avaliacoes[melhor.indice]} estrelas de 5`
        
    }

    function totalPaginasLidas():number{
        
    const paginasLidas:number =paginas.reduce((sum,pag)=>{
            return sum + pag
        })


        return paginasLidas
    }

    function exibirPorDecada():void{
        console.log('POR DECADA ')
        draw()

            const decadas: number[] = []

    // Primeiro: descobrir quais décadas existem
    anos.forEach((ano) => {
        const decada = Math.floor(ano / 10) * 10
        if (!decadas.includes(decada)) {
            decadas.push(decada)
        }
    })

    // Ordenar décadas (opcional, mas fica mais bonito)
    decadas.sort((a, b) => a - b)

    // Segundo: agrupar livros por década
    decadas.forEach((decada) => {

        const livrosDaDecada = titulos
            .map((titulo, i) => {
                if(anos[i]!== undefined){
                const dec = Math.floor(anos[i] / 10) * 10
                return dec === decada ? titulo : null}

            })
            .filter(titulo => titulo !== null)

        console.log(`${decada}s: ${livrosDaDecada.join(', ')}`)
        
    })
}
 
    exibirBiblioteca()
    staticMenu()
    console.log(`Total livros lidos: ${totalLivros()}`)
    console.log(`Livros lidos: ${totalLidos()} (${percentualLidos().toFixed(2)}%)`)
    console.log(`Media das avaliações: ${mediaAvaliacoes().toFixed(2)}`)
    console.log(livroMaiorAvaliacao())
    console.log(`Total paginas lidas: ${totalPaginasLidas()}`)
    draw()
    exibirPorDecada()
    draw()
