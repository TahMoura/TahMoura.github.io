(function() {
    emailjs.init("RtgIgXjuXKd9QCLSx");})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const templateParams = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_nyju2jm', 'template_9d1qa5q', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('Erro ao enviar o e-mail:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        });
});
