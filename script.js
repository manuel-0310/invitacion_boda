// Animación secuencial de la invitación
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const continueBtn = document.getElementById('continueBtn');

    // Secuencia de animación mejorada
    setTimeout(() => {
        // Paso 1: El sobre aparece (ya está visible por CSS)
        console.log('Sobre visible');
    }, 500);

    setTimeout(() => {
        // Paso 2: El sobre se abre (2 segundos después de aparecer)
        envelope.classList.add('open');
        console.log('Sobre abriéndose');
    }, 2500);

    setTimeout(() => {
        // Paso 3: La carta sale del sobre (1.5 segundos después de que el sobre se abra completamente)
        // Esto da tiempo para ver el sobre abierto antes de que salga la carta
        letter.classList.add('show');
        console.log('Carta saliendo del sobre');
    }, 4200);

    setTimeout(() => {
        // Paso 4: Aparece el botón continuar (1 segundo después de que aparezca la carta)
        continueBtn.classList.add('show');
        console.log('Botón visible');
    }, 5500);

    // Agregar efecto de sonido al hacer hover en el botón (opcional)
    continueBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    continueBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Prevenir doble clic en el botón
    let clicked = false;
    continueBtn.addEventListener('click', function(e) {
        if (clicked) {
            e.preventDefault();
            return;
        }
        clicked = true;
        
        // Agregar efecto de transición al hacer clic
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            // Aquí se redirige a main.html (ya está en el onclick del HTML)
        }, 200);
    });
});

// Efecto parallax suave con el mouse (opcional, para mayor elegancia)
document.addEventListener('mousemove', function(e) {
    const flowers = document.querySelectorAll('.flower');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    flowers.forEach((flower, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed * 20;
        const yPos = (y - 0.5) * speed * 20;
        flower.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Reiniciar animación si se recarga la página
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('animationPlayed', 'true');
});

// Si quieres que la animación solo se reproduzca una vez por sesión:
// if (sessionStorage.getItem('animationPlayed')) {
//     window.location.href = 'main.html';
// }