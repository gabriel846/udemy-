 // closure é o escoo criado quando uma funçao é declarada 
 //esse escopo permite a funçao acessar e manipular variaveis externas á funçao

 //context léxico em açao!

 const x = 'Global'

 function fora() {
     const x = 'Local'
     function dentro() {
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao())