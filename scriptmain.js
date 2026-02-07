// Configura la fecha de la boda aquí
const weddingDate = new Date("May 23, 2026 15:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inyectar en el HTML
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "¡LLEGÓ EL DÍA!";
    }
}, 1000);

(function() {
    // Reemplaza con tu Public Key de EmailJS
    emailjs.init("O9TA18-zps7iaEptM");
})();


const btn = document.getElementById('button-send');

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
   event.preventDefault();

   // Validación básica visual
   btn.innerText = 'ENVIANDO...';
   btn.style.opacity = '0.7';

   emailjs.sendForm('service_6m7prwn', 'template_41pvc6t', this)
    .then(() => {
      btn.innerText = '¡ENVIADO CON ÉXITO!';
      btn.style.backgroundColor = '#27ae60';
      alert('¡Gracias! Tu confirmación ha sido recibida.');
      this.reset();
    }, (err) => {
      btn.innerText = 'ERROR AL ENVIAR';
      btn.style.backgroundColor = '#e74c3c';
      alert('Hubo un error: ' + JSON.stringify(err));
    });
});
