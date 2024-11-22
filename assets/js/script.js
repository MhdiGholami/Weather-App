// Weather App
// **************

// Project Database
let backgroundImgs = [
    { id: 0, src: 'assets/img/background_1.jpg' },
    { id: 1, src: 'assets/img/background_2.jpg' },
    { id: 2, src: 'assets/img/background_3.jpg' },
    { id: 3, src: 'assets/img/background_4.jpg' },
    { id: 4, src: 'assets/img/background_5.jpg' },
]
const months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' },
];
const weekDays = [
    { id: 0, name: 'Sunday' },
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
]
let locationDetails = [
    { name: 'tehran', temp: 23, iconSrc: 'assets/img/sun.svg', windSpeed: 18, direction: 'east' },
    { name: 'karaj', temp: 22, iconSrc: 'assets/img/thunder.svg', windSpeed: 17, direction: 'west' },
    { name: 'yazd', temp: 36, iconSrc: 'assets/img/sun.svg', windSpeed: 4, direction: 'south' },
    { name: 'shiraz', temp: 28, iconSrc: 'assets/img/cloudy2.svg', windSpeed: 15, direction: 'north' },
    { name: 'esfehan', temp: 30, iconSrc: 'assets/img/sun.svg', windSpeed: 13, direction: 'east' },
    { name: 'mashhad', temp: 29, iconSrc: 'assets/img/sun.svg', windSpeed: 11, direction: 'west' },
    { name: 'rasht', temp: 21, iconSrc: 'assets/img/rainy.svg', windSpeed: 19, direction: 'south' },
    { name: 'tabriz', temp: 18, iconSrc: 'assets/img/cloudy.svg', windSpeed: 16, direction: 'north' },
]

// Dom Elements Selection
let i = 0
let randomNumber = Math.floor(Math.random() * 5)
let bodyElem = document.querySelector('body')

let date = new Date()
let flag1 = 0
let flag2 = 0

let tempNumber = document.getElementById('number')
let degreeIcon = document.getElementById('degree-iconImg')
let windSpeed = document.getElementById('wind-speed')
let directionWord = document.getElementById('direction-word')

let searchInp = document.getElementById('input-search')


// Set Random Background Image
backgroundImgs.map(function () {
    if (randomNumber === backgroundImgs[i].id) {
        bodyElem.setAttribute('background', backgroundImgs[i].src)
    }
    i++
})

// Set Date && Time
months.map(function () {
    if (date.getDate() === months[flag1].id) {
        document.getElementById('date-month').innerText = date.getDate() + ' ' + months[flag1].name
    }
    flag1++
})
weekDays.map(function () {
    if (date.getDay() === weekDays[flag2].id) {
        document.getElementById('day-week').innerText = weekDays[flag2].name
    }
    flag2++
})

// Set New Data When Click on Go Button
function searchBtn() {
    let searchInp = document.getElementById('input-search')
    let count = 0
    document.getElementById('city').innerText = searchInp.value

    locationDetails.map(function () {
        if (searchInp.value === locationDetails[count].name) {
            tempNumber.innerText = locationDetails[count].temp
            degreeIcon.setAttribute('src', locationDetails[count].iconSrc)
            windSpeed.innerText = locationDetails[count].windSpeed + 'km/h'
            directionWord.innerText = locationDetails[count].direction
        }
        count++
    })
}

// Enter Click Default
searchInp.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
})




