document.getElementById('botaoSimular').addEventListener('click', function() {
    const MAX_ROLAMENTOS = 1000000;
    const resultados = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

    for (let i = 0; i < MAX_ROLAMENTOS; i++) {
        let rolar = rolarDado();
        resultados[rolar]++;
    }

    for (let num in resultados) {
        document.getElementById(`num-${num}`).textContent = resultados[num];
    }
});

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
