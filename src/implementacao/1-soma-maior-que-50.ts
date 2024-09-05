function somaMaiorQueCinquenta(valor1: number, valor2: number): number{
    
    var soma: number = 0

    soma = valor1 + valor2; 
    if ( soma > 50 ){
        return soma
    }  else {
        return 0;
    }
    
}
console.log(somaMaiorQueCinquenta(46,5));