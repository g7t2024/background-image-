// O JavaScript pode ser usado para adicionar interatividade, mas não é essencial para o carrossel básico.
// Você pode adicionar mais funcionalidades conforme necessário.
// O JavaScript pode ser usado para adicionar interatividade, mas não é essencial para o carrossel básico.
// Você pode adicionar mais funcionalidades conforme necessário.
$(document).ready(function () {
    // Configurações
    var intervalo = 5000; // Intervalo de transição em milissegundos (5 segundos no exemplo)
    
    // Seleciona o carrossel
    var $carousel = $('#carousel');

    // Obtém a largura de uma imagem (assumindo que todas as imagens têm a mesma largura)
    var larguraImagem = $('.carousel img').width();

    // Configura o intervalo
    setInterval(function () {
        // Move o carrossel para a esquerda
        $carousel.animate({
            marginLeft: -larguraImagem
        }, 1000, function () {
            // Move a primeira imagem para o final
            $carousel.css({ marginLeft: 0 }).find('img:last').after($carousel.find('img:first'));
        });
    }, intervalo);
});
