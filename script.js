function toggleDetalhes(button) {
    const imovel = button.parentElement;
    const detalhes = imovel.querySelector(".detalhes");
    const resumo = imovel.querySelector(".resumo");

    if (detalhes.hidden) {
        detalhes.hidden = false;
        resumo.hidden = true;
        button.textContent = "Ver Menos";
    } else {
        detalhes.hidden = true;
        resumo.hidden = false;
        button.textContent = "Ver Detalhes";
    }
}
