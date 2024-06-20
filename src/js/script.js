document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    const resultado = `
        <p> Quantidade de itens a serem comprados: </p>
        <p>- ${carneBovina.toFixed(1).replace('.',',')} Kg de carne bovina</p>
        <p>- ${frango.toFixed(1).replace('.',',')} Kg de frango</p>
        <p>- ${linguica.toFixed(1).replace('.',',')} Kg de linguiça</p>
        <p>- ${refrigerante.toFixed(1).replace('.',',')} litros de refrigerante</p>
        <p>- ${cerveja.toFixed(1).replace('.',',')} litros de cerveja</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').style.color = 'white';
});
