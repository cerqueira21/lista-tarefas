$(document).ready(function(){
    $('#iniciar-btn').click(function(){
        $('form').slideDown();
    })
    
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const daTa = $('#data').val();
        const tareFa = $('#tarefa').val();
        const dataEntrega = $('#data-entrega').val();
        const deSc = $('#descricao').val();
        console.log(daTa);
        console.log(tareFa);
        console.log(dataEntrega);
        console.log(deSc);
        const novoItem = $('<td></td>');

        $(`<tbody id="tabela">
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>`).appendTo(novoItem);

    $(novoItem).appendTo('tbody');
    $(novoItem).fadeIn();

    $('#data, #tarefa, #data-entrega, #descricao').val(' ');
    })
})
