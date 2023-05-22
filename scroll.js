let btn = document.querySelector('.arrows')
let el = document.querySelector('.special')

btn.addEventListener('click', function () {
    el.scrollIntoView(true)
    el.scrollIntoView({ behavior: 'smooth' })
})
