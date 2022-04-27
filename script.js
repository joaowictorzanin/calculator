function calculadora(){
    const operacao = Number(prompt('Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteiro (%)\n 6 - Potencição (**)\n'))

    if(operacao < 1 || operacao > 6){
        alert('[ERROR] Digite um número válido')
        calculadora()
    }else{

        let numero1 = Number(prompt('Digite o primeiro numero:'))
        let numero2 = Number(prompt('Digite o numero segundo numero: '))
        let resultado
        
        if(!numero1 || !numero2){
            alert('[ERROR] Digite um número válido')
            calculadora()  
        } else{

            function soma(){
                resultado = numero1 + numero2
                alert(`O resultado de ${numero1} + ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function subtracao(){
                resultado = numero1 - numero2
                alert(`O resultado de ${numero1} - ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function multiplicacao(){
                resultado = numero1 * numero2
                alert(`O resultado de ${numero1} * ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function divisaoreal(){
                resultado = numero1 / numero2
                alert(`O resultado de ${numero1} / ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function divisaointeiro(){
                resultado = numero1 % numero2
                alert(`O resultado de ${numero1} % ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function potenciacao(){
                resultado = numero1 ** numero2
                alert(`O resultado de ${numero1} ** ${numero2} = ${resultado}`)
                outraOperacao()
            }

            function outraOperacao(){
                let novaOperacao = Number(prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não'))
                if(novaOperacao == 1){
                    calculadora()
                } else if(novaOperacao == 2){
                    alert('Até a proxima ;D')
                    location.href = "https://www.dio.me/"
                } else{
                    alert('[ERROR] Digite um numero valido')
                    outraOperacao()
                }
            }

            if (operacao == 1) {
                soma()  
            } else if (operacao == 2) {
                subtracao()
            } else if (operacao == 3) {
                multiplicacao()
            } else if (operacao == 4) {
                divisaoreal()
            } else if (operacao == 5){
                divisaointeiro()
            } else if(operacao == 6){
                potenciacao()
            } 

        }
    }
}
calculadora()