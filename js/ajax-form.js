$(function() {
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    form.submit(function(event) {
        event.preventDefault();

        var submitBtn = form.find('[type="submit"]');
        submitBtn.prop('disabled', true).text('Enviando...');

        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form.serialize(),
            headers: { 'Accept': 'application/json' }
        }).done(function(response) {
            if (response.ok) {
                formMessages.removeClass('error').addClass('success');
                formMessages.text('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                $('#inputName').val('');
                $('#inputEmail').val('');
                $('#inputPhone').val('');
                $('#inputSubject').val('');
                $('#inputMessage').val('');
            }
        }).fail(function(xhr) {
            formMessages.removeClass('success').addClass('error');

            var msg = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
            try {
                var json = JSON.parse(xhr.responseText);
                // Formspree retorna { error: "..." } ou { errors: [{message:"..."}] }
                if (json.error) {
                    msg = json.error;
                } else if (json.errors && json.errors.length) {
                    msg = json.errors.map(function(e) { return e.message; }).join(', ');
                }
            } catch (e) {}

            console.error('[Formspree] HTTP', xhr.status, xhr.responseText);
            formMessages.text(msg);
        }).always(function() {
            submitBtn.prop('disabled', false).text('Enviar Agora');
        });
    });
});
