function determinarMaiorMenorDeQuatro() {
  const readline = require("readline");

  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
    teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
      teclado.question(
        "Digite o terceiro numero: ",
        (terceiroNumero: string) => {
          teclado.question(
            "Digite o quarto numero: ",
            (quartoNumero: string) => {
              let numero1 = parseInt(primeiroNumero);
              let numero2 = parseInt(segundoNumero);
              let numero3 = parseInt(terceiroNumero);
              let numero4 = parseInt(quartoNumero);

              if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4){
                console.log("O Primeiro numero é o maior ")
              }
            }
          );
        }
      );
    });
  });
}
determinarMaiorMenorDeQuatro();
