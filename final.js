document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cambio-color');

    button.addEventListener('click', () => {
        const h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach(h1 => {
            h1.style.color = "yellow";
        });
    });
});
