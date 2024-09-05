function calcularBonificacao(valorUni: number, qtdVendida: number): string {
    
    let total: number = 0;

    total = valorUni * qtdVendida;

    if (total > 100){
        return "Bonificação de 10% para o vendedor!"
    } else {
        return "Você não tem bonificação."
    }
    
}
console.log(calcularBonificacao(10,10));

