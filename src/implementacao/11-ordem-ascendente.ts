function ordenarAscendente() {
  const readline = require("readline");
  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
    let numero1 = parseInt(primeiroNumero);
    teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
      let numero2 = parseInt(segundoNumero);
      teclado.question(
        "Digite o terceiro numero: ",
        (terceiroNumero: string) => {
          let numero3 = parseInt(terceiroNumero);

          if (numero1 <= numero2 && numero1 <= numero3) {
            if (numero2 <= numero3) {
              console.log(numero1, numero2, numero3)
            } else {
              console.log(numero1, numero3, numero2)
            }
          } else if (numero2 <= numero1 && numero2 <= numero3) {
            if (numero1 <= numero3) {
              console.log(numero2, numero1, numero3)
            } else {
              console.log(numero2, numero3, numero1)
            }
          } else {
            if (numero1 <= numero2) {
              console.log(numero3, numero1, numero2)
            } else {
              console.log(numero3, numero2, numero1)
            }
          }

          teclado.close();
        }
      );
    });
  });
}
ordenarAscendente();
