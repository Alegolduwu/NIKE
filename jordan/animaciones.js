document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-bg-button');
    let imagen_original = "url('media2/fondojordan2.jpg')";
    let nueva_imagen = "url('media2/jordan4.png')";
    let original = true;

    button.addEventListener('click', () => {
        if (original) {
            document.body.style.backgroundImage = nueva_imagen;
        } else {
            document.body.style.backgroundImage = imagen_original;
        }
        original = !original;
    });
});
