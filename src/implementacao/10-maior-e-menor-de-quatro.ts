
function determinarMaiorMenorDeQuatro() {
  const readline = require("readline");

  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let arrayNumeros: number[] = []

  teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
    let numero1 = parseInt(primeiroNumero);
    arrayNumeros.push(numero1);

    teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
      let numero2 = parseInt(segundoNumero);
      arrayNumeros.push(numero2);

      teclado.question("Digite o terceiro numero: ", (terceiroNumero: string) => {
        let numero3 = parseInt(terceiroNumero);
        arrayNumeros.push(numero3);

        teclado.question("Digite o quarto numero: ", (quartoNumero: string) => {
          let numero4 = parseInt(quartoNumero);
          arrayNumeros.push(numero4);

          let maiorNumero: number = 0;
          let menorNumero: number = 0;
         
          menorNumero = arrayNumeros[0];
          
          for (let i = 0; i < arrayNumeros.length; i++) {

            if (arrayNumeros[i] > maiorNumero) {
              maiorNumero = arrayNumeros[i]
            }

            if (arrayNumeros[i] < menorNumero) {
              menorNumero = arrayNumeros[i]
            }
          }
          console.log("O maior numero é: ", maiorNumero)
          console.log("O menor numero é: ",menorNumero)
          teclado.close();
        })

      }
      );
    }
    );
  });
}
determinarMaiorMenorDeQuatro();
