const button = document.querySelector('#toggler')
const burger = document.querySelector('.burger')

button.addEventListener("click", () => {
    if (burger.style.display === 'none' || burger.style.display === '') {
        burger.style.display = 'block';
    } else {
        burger.style.display = 'none';
    }

    document.body.style.overflow = burger.classList.contains('active') ? 'hidden' : 'auto';
});


const non_toggler = document.querySelector('#non_toggler')

non_toggler.addEventListener("click", () => {
    if (burger.style.display === 'block' || burger.style.display === '') {
        burger.style.display = 'none';

    } else {
        burger.style.display = 'block';
    }

    document.body.style.overflow = 'auto';
});

