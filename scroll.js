let btn = document.querySelector('.arrows')
let el = document.querySelector('.special')

btn.addEventListener('click', function () {
    el.scrollIntoView({ block: 'end', behavior: 'smooth' })
    el.scrollIntoView(true)
})
