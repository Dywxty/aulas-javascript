document.getElementById('imc').addEventListener('submit', function(event) {
            event.preventDefault(); 
            //impede o envio do formulário para evitar 
            // recarregamento da página, ou seja, vai parar o evento pra fazer o cálculo
            
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            
            const imc = peso / (altura * altura);
            let classificacao = ''; //armazena a classificação do IMC

            if (imc < 18.5) {
                classificacao = "Abaixo do peso";

            } else if (imc >= 18.5 && imc < 24.9) {
                classificacao = "Peso normal";
            
            }else if (imc >= 24.9 && imc < 29.9) {
                classificacao = "sobrepeso";
            
            }else if (imc >= 29.9 && imc < 34.9) {
                classificacao = "Obesidade grau I";
            
            }else if (imc >= 34.9) {
                classificacao = "Obesidade grau II";

            } else {
                classificacao = "Obesidade grau III";
            }
            document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;

            //da reset nos valores p e a, e do resultado para um novo cálculo
            document.getElementById('resetButton').addEventListener('click', function() {
                document.getElementById('peso').value = '';
                document.getElementById('altura').value = '';
                document.getElementById('resultado').textContent = '';
            });
            
        });