function calcularRaizOuQuadrado() {
  const readline = require("readline");

  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite um numero: ", (valorDigitado: string) => {
    let numero = parseInt(valorDigitado);

    if (numero >= 0) {
        console.log("A raiz quadrada do numero é: ", Math.sqrt(numero))
    } else {
        console.log("O quadrado do numero é: ", (numero*numero))
    }
    teclado.close();
  });
}
calcularRaizOuQuadrado();
