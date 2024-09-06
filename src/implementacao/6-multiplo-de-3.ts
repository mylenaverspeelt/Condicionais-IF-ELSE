function verificarMultiploDe3() {
    const readline = require('readline');
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    teclado.question("Digite um numero: ", (numero: string) => {
        const numeroConvertido = parseInt(numero);

        if ( numeroConvertido % 3 == 0){
            console.log("É múltiplo de 3")
        } else {
            console.log("Não é múltiplo de 3")
        }
        teclado.close();
    })
}
verificarMultiploDe3();
