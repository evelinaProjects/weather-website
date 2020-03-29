const formButton = document.querySelector('form')
const LoactionInput = document.querySelector('input')
const msg1 = document.querySelector('#p1')
const msg2 = document.querySelector('#p2')

formButton.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = LoactionInput.value
    msg1.textContent = 'Looking for a weather in ' + location + '...'
    msg2.textContent = ''


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })
})