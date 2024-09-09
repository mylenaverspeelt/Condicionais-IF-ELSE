function verificarEmprestimo() {
    const readline = require("readline");
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    teclado.question("Digite seu salário bruto: ", (valorSalario: string) => {
        let salarioBruto = parseFloat(valorSalario);
        teclado.question("Digite o valor da prestação: ", (valorPrestacao: string) => {
            let prestacao = parseFloat(valorPrestacao);

            
        })
    }) 
        }

