function somaComAjuste() {
    const readline = require('readline');

    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
      teclado.question("Digite o segundo numero: ",(segundoNumero: string) => {
        let numero1 = parseInt(primeiroNumero);
        let numero2 = parseInt(segundoNumero);

        let soma = numero1 + numero2

        if (soma > 20){
            console.log(soma + 8)
        } else {
            console.log(soma - 5)
        }
        teclado.close();
      })  
    })
}
somaComAjuste();
