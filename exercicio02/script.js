var bt = document.getElementById('contar')
bt.addEventListener('click' ,clicar)
function clicar(){
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('resultado')
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('Faltam Dados [ERRO]')
    }
    else if (inicio <= 0 || fim <= 0 || passo <= 0){
        alert('[ERRO] NÚMERO INVALIDO')
        inicio, fim, passo = 1
    }
    else{
        let inum = Number(inicio)
        let ifim = Number(fim)
        let ipas = Number(passo)
        res.innerHTML = 'Contando: '
        for(c = inum; c<=ifim;c+=ipas){
            res.innerHTML += `${c} `
        }
    }

}