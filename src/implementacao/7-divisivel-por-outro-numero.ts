function verificarDivisivel() {
  const readline = require("readline");

  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
    teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
      let numero1 = parseInt(primeiroNumero);
      let numero2 = parseInt(segundoNumero);

      if (numero1 % numero2 == 0) {
        console.log("Esse numero é divisível");
      } else {
        console.log("Esse numero não é divisível");
      }

      teclado.close();
    });
  });
}
verificarDivisivel();
