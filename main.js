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

        if (daTa && tareFa && dataEntrega && deSc) {
            const novoItem = $('<tr></tr>').append(
                `<td>${daTa}</td>
                 <td>${tareFa}</td>
                 <td>${dataEntrega}</td>
                 <td>${deSc}</td>`
            );

            $('tbody').append(novoItem);
            novoItem.fadeIn();

            $('#data, #tarefa, #data-entrega, #descricao').val('');
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
})
