function verificarNumero() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite um numero: ', (numeroInput: string) => {
        const numeroConvertido = parseInt(numeroInput)

        if (numeroConvertido < 0) {
            console.log("Negativo")
        } else if (numeroConvertido == 0) {
            console.log("Nulo")
        } else {
            console.log("Positivo")
        }
        rl.close()
    });
}

verificarNumero()


