let script = document.currentScript

window.addEventListener('DOMContentLoaded', () => {
    let iDiv = document.createElement('div')
    iDiv.id = 'cursor'
    if (script.getAttribute('difference') == 'disable') {
        iDiv.className = 'mscursor-cursor'
    } else {
        iDiv.className = 'mscursor-cursor mscursor-difference'
    }
    document.getElementsByTagName('body')[0].appendChild(iDiv)

    let pauseAnimation = script.getAttribute('pause-animation')

    let innerDiv = document.createElement('div')

    if (script.getAttribute('color') !== null) {
        iDiv.style.backgroundColor = script.getAttribute('color')
    } else {
        if (script.getAttribute('difference') == 'disable') {
            iDiv.style.backgroundColor = 'black'
        } else {
            iDiv.style.backgroundColor = 'white'
        }
    }

    if (pauseAnimation !== null && pauseAnimation == 'disable') {
        if (script.getAttribute('circle-outline') == 'disable') {
            innerDiv.className = 'mscursor-circle'
        } else {
            innerDiv.className = 'mscursor-circle new'
        }
    } else {
        if (script.getAttribute('circle-outline') == 'disable') {
            innerDiv.className = 'mscursor-circle mscursor-border-transform'
        } else {
            innerDiv.className = 'mscursor-circle new mscursor-border-transform'
        }
    }

    iDiv.appendChild(innerDiv)

    let size = Number(script.getAttribute('size')) || 30

    for (let i = 0; i < size; i++) {
        let innerDiv = document.createElement('div')
        if (pauseAnimation !== null && pauseAnimation == 'disable') {
            innerDiv.className = 'mscursor-circle'
        } else {
            innerDiv.className = 'mscursor-circle mscursor-border-transform'
        }

        if (script.getAttribute('color') !== null) {
            innerDiv.style.backgroundColor = script.getAttribute('color')
        } else {
            if (script.getAttribute('difference') == 'disable') {
                innerDiv.style.backgroundColor = 'black'
            } else {
                innerDiv.style.backgroundColor = 'white'
            }
        }
        iDiv.appendChild(innerDiv)
    }

    const coords = { x: 0, y: 0 }
    let timeout
    const circles = document.querySelectorAll('.mscursor-circle')

    const cursor = document.querySelector('.mscursor-cursor')

    circles.forEach(function (circle, index) {
        circle.x = 0
        circle.y = 0
        if (script.getAttribute('gradient') !== null) {
            let colors = script.getAttribute('gradient').split(',')
            circle.style.backgroundColor =
                colors[Math.floor((index * colors.length) / circles.length)]

            document.querySelector(
                'div.new'
            ).border = `0.5px solid ${colors[0]}`
        }
    })

    const addclass = (e) => {
        if (script.getAttribute('pause-animation') !== 'disable') {
            document.body.classList.remove('mscursor-nocursor')
            if (script.getAttribute('circle-outline') !== 'disable') {
                document
                    .querySelector('div.new')
                    .classList.remove('mscursor-scale-outline')
                document.querySelector('div.new').style.border = ''
            }
            document
                .querySelectorAll('div.mscursor-circle')
                .forEach((element) => {
                    element.classList.remove('mscursor-scale')
                })
        }
        coords.x = e.clientX
        coords.y = e.clientY
    }

    window.addEventListener('mousemove', (e) => addclass(e))
    window.addEventListener('touchmove', (e) => addclass(e.touches[0]))

    function animateCircles() {
        let x = coords.x
        let y = coords.y

        cursor.style.top = x
        cursor.style.left = y

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + 'px'
            circle.style.top = y - 12 + 'px'

            circle.style.scale = (circles.length - index) / circles.length

            circle.x = x
            circle.y = y

            const nextCircle = circles[index + 1] || circles[0]
            x += (nextCircle.x - x) * 0.3
            y += (nextCircle.y - y) * 0.3
        })

        requestAnimationFrame(animateCircles)
    }

    animateCircles()

    if (script.getAttribute('cursor') == 'disable') {
        document.body.classList.add('mscursor-nocursor')
    }

    if (script.getAttribute('pause-animation') !== 'disable') {
        const moove = () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                document.body.classList.add('mscursor-nocursor')
                if (
                    script.getAttribute('mscursor-circle-outline') !== 'disable'
                ) {
                    document
                        .querySelector('div.new')
                        .classList.add('mscursor-scale-outline')

                    if (script.getAttribute('color') !== null) {
                        if (script.getAttribute('color-outline') !== null) {
                            document.querySelector(
                                'div.new'
                            ).style.border = `0.5px solid ${script.getAttribute(
                                'color-outline'
                            )}`
                        } else {
                            document.querySelector(
                                'div.new'
                            ).style.border = `0.5px solid ${script.getAttribute(
                                'color'
                            )}`
                        }
                    } else {
                        if (script.getAttribute('color-outline') !== null) {
                            document.querySelector(
                                'div.new'
                            ).style.border = `0.5px solid ${script.getAttribute(
                                'color-outline'
                            )}`
                        } else {
                            if (
                                script.getAttribute('difference') == 'disable'
                            ) {
                                document.querySelector(
                                    'div.new'
                                ).style.border = `0.5px solid black`
                            } else {
                                document.querySelector(
                                    'div.new'
                                ).style.border = `0.5px solid white`
                            }
                        }
                    }
                }
                document
                    .querySelectorAll('div.mscursor-circle')
                    .forEach((element) => {
                        element.classList.add('mscursor-scale')
                    })
            }, 100)
        }

        document.onmousemove = moove
        document.ontouchmove = moove
    }
})

// end mscursor
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ['Kévin Da Silva.', 'Web Developper.', 'Portfolio.', 'bye!']

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function title2(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
            // add next character to h1
            document.querySelector('h1').innerHTML =
                text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

            // wait for a while and call this function again for next character
            setTimeout(function () {
                title2(text, i + 1, fnCallback)
            }, 100)
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700)
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0)
            }, 20000)
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            title2(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1)
            })
        }
    }
    // start the text animation
    StartTextAnimation(0)
})
