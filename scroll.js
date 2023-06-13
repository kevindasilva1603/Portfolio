let btn = document.querySelector('.arrows')
let el = document.querySelector('.special')

btn.addEventListener('click', function () {
    el.scrollIntoView(true)
    el.scrollIntoView({ behavior: 'smooth' })
})

function toggleDarkMode() {
    const body = document.body
    body.classList.toggle('dark-mode')

    const darkModeIcon = document.getElementById('dark-mode-icon')
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.src =
            'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg'
        darkModeIcon.alt = 'Icône de mode clair'
    } else {
        darkModeIcon.src =
            'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg'
        darkModeIcon.alt = 'Icône de mode sombre'
    }
}
