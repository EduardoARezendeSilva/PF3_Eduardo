function calcular() 
{
    const nome = document.getElementById('nome').value;
    const aplicacao = document.getElementById('aplicacao').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resulatdo = document.getElementById('resultado');

    if (nome != "" || peso != "" || tempo != "" || distancia != "")
    {
        const porcentagem = juros/100;

        const poupado = (aplicacao * ((((1 + porcentagem) ** parcelas) - (1)) / (porcentagem))).toFixed(2);

        resulatdo.textContent = nome + ", se você aplicar R$" + aplicacao + ", à taxa de juros de " + juros + "% ao mês, durante " + parcelas + " meses, acumulará uma poupança de R$" + poupado;
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}
