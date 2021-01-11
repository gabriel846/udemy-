//02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
function lados(a, b,c) {
    if(a == b && b == c && c == a ){//os tres sao iguais (se a = b e b = c e c = a return equilatero)
        return 'equilatero'
    }else if(a == b || b == c || a == c){//se a = b ou b = c ou a = c  return isoceles 
        return 'isosceles'
    }else {//se nenhum dos acima for verdadeira return escaleno
        return 'escaleno'
    }
}
console.log(lados(7,7,7))
console.log(lados(7,7,8))
console.log(lados(8,9,7))