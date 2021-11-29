setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60 //Say 43, then divide by 60 = 0.7
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 //0.7 + 43 = 43.7
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
            //43.7 + 3 / 12 = 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()