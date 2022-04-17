function contar(){
    var start = document.querySelector('.start')
    var end = document.querySelector('.end')
    var step = document.querySelector('.step')
    var rest = document.querySelector('.res')

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        rest.innerHTML = 'Impossivel contar. Preencha todos os campos.'
        rest.style.color ='#ff0000'
    } else{
        rest.innerHTML ='Contando: <br>'
        let init = Number(start.value)
        let fim = Number(end.value)
        let pass = Number(step.value)

        if(pass <= 0){
            rest.innerHTML = 'A entrada <strong>Passo</strong> deve ser maior que 0'
            rest.style.color ='#ff0000'
            pass = 1
        }else if(init < fim){
            //CONTAGEM CRESCENTE
            for (let cont = init; cont <= fim; cont += pass){
                    rest.innerHTML += ` ${cont} \u{1F446} `
                }
        } else{
            //CONTAGEM REGRESSIVA
            for (let cont = init; cont >= fim; cont -= pass){
                rest.innerHTML += `${cont} \u{1F447} `
            }
        }  
    }
}