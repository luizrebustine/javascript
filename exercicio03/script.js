var input = document.getElementById('inputnum')
        var output = document.getElementById('output')
        var final = document.getElementById('final')
        var num = []
        var br = document.createElement('br')
        var soma = 0
        function adicionar() {
            num.push(Number(input.value))
            output.innerText = num
        }
        function limpar() {
            num = []
            soma = 0
            media = 0
            output.innerText = num
            final.style.display = 'none'
        }
        function finalizar() {
            final.style.display = 'block'
            if(num.length <1){
                alert('Adicione um Número')
            }
            else{
                final.innerText = `${num.length} Números Cadastrados`
                final.appendChild(br)
                final.innerText += `O Maior Número é ${Math.max(...num)}`
                final.appendChild(br)
                final.innerText += `O Menor Número é ${Math.min(...num)}`
                final.appendChild(br)
                for(var i = 0;i<num.length;i++){
                    soma += num[i]
                }
                final.innerText += `A Soma entre os Números é de ${soma}`
                let media = soma/num.length
                final.appendChild(br)
                final.innerText += `A Média entre os Números é ${media.toFixed(1)}`
            }
            
        }