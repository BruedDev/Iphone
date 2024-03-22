function displayCurrentTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = formatTimeComponent(hours);
    minutes = formatTimeComponent(minutes);

    var timeString = hours + ":" + minutes;

    document.getElementById("current-time").textContent = timeString;
}

function formatTimeComponent(component) {
    return component < 10 ? "0" + component : component;
}

setInterval(displayCurrentTime, 1000);

// time center
const currentTimeElement = document.getElementById("current-time-center");

function updateTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    const formattedTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    currentTimeElement.textContent = formattedTime;

}
updateTime();
setInterval(updateTime, 1000);
// container-time-file
var time = document.getElementById("curren-time");

function updateCurrentTime() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var formattedTime = currentHour + ":" + currentMinute;
    time.textContent = formattedTime;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
// date
const dateElement = document.querySelector('.date');

const daysOfWeek = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy'
];

const months = [
    'tháng 1',
    'tháng 2',
    'tháng 3',
    'tháng 4',
    'tháng 5',
    'tháng 6',
    'tháng 7',
    'tháng 8',
    'tháng 9',
    'tháng 10',
    'tháng 11',
    'tháng 12'
];

const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

dateElement.textContent = formattedDate;
// password phone
const buttons = document.querySelectorAll('button');
const span = document.getElementsByTagName('span');
const spanContainer = document.querySelector('.container-input');
const parent = document.querySelector('.container-enter-number');
const cancel = document.querySelector('.cancel');
const screen = document.querySelector('.container-password');
const subText = document.querySelectorAll('.letters');
const zero = document.querySelector('.zero');
const containerFile = document.querySelector('.container-file');
const result = document.querySelector('.result');
const password = '190603';
let clicks = 0;
let guess = '';


function changeBgColor(color, number) {
    span[number].style.backgroundColor = color;
    span[number].style.backgroundColor = color;
    span[number].style.backgroundColor = color;
    span[number].style.backgroundColor = color;
    span[number].style.backgroundColor = color;
    span[number].style.backgroundColor = color;
}

parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        changeBgColor('white', clicks);
        clicks += 1;
        guess += e.target.className;
        console.log(guess);
    } else if (e.target.className === 'cancel') {
        clicks -= 1;
        changeBgColor('transparent', clicks);
        guess = guess.slice(0, -1);
        console.log(guess);
    } else if (e.target.className === 'emergency') {
        emergency.style.display = 'none';
        screen.style.background = 'white';
        touch.style.color = 'red';
        cancel.style.color = 'black';
        phone.style.display = 'inline-flex';
        for (let i = 0; i < 10; i++) {
            buttons[i].style.backgroundColor = '#D8D6D6';
            buttons[i].style.color = 'black';
            subText[i].style.backgroundColor = '#D8D6D6';
            subText[i].style.color = 'black';
        }
    }


    if (guess === password) {
        containerFile.style.display = 'block';
        screen.style.display = 'none';
    } else if (clicks === 6) {
        result.style.display = 'block';
        changeBgColor('transparent', 0);
        changeBgColor('transparent', 1);
        changeBgColor('transparent', 2);
        changeBgColor('transparent', 3);
        changeBgColor('transparent', 4);
        changeBgColor('transparent', 5);
        guess = '';
        clicks = 0;
    }
});

// block container-password
const horizontalElement = document.querySelector('.horizontal');
const pPassword = document.querySelector('p');
const containerPasswordElement = document.querySelector('.container-password');
const passwordInput = document.querySelector('#password-input');
const cancelButton = document.querySelector('.cancel-01');
const containerBottom = document.querySelector('.container-bottom');
const contentPhone = document.querySelector('.content-phone');

horizontalElement.addEventListener('click', function (event) {
    containerPasswordElement.style.display = 'block';
    containerPasswordElement.style.display = 'flex';
    containerBottom.style.display = 'none';
});

containerPasswordElement.addEventListener('click', function (event) {
    event.stopPropagation();
});
cancelButton.addEventListener('click', function (event) {
    containerPasswordElement.style.display = 'none';
    containerBottom.style.display = 'block';
    containerBottom.style.display = 'flex';
});
// block power
const power = document.querySelector('.power');
const containerOffphone = document.querySelector('.container-offphone');
const containerPhone = document.querySelector('.container-offphone');
const horizontalPassword = document.querySelector('.horizontal-password');
let isOffphoneDisplayed = false;

power.addEventListener('click', function (event) {
    if (isOffphoneDisplayed) {
        containerOffphone.style.animation = 'fade-out 0.3s';
        setTimeout(function () {
            containerOffphone.style.display = 'none';
            horizontalPassword.style.display = 'block';

        }, 300);

        isOffphoneDisplayed = false;
    } else {
        containerOffphone.style.display = 'block';
        horizontalPassword.style.display = 'none';
        containerOffphone.style.animation = 'fade-in 0.5s';

        isOffphoneDisplayed = true;
    }
});
// assistouch
const draggable = document.querySelector('.draggable');
const container = document.querySelector('.container-assistouch');

let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let isDragging = false;

container.addEventListener('mousedown', dragStart);

function dragStart(e) {
    if (e.target === draggable) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        isDragging = true;

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }
}

function dragMove(e) {
    if (isDragging) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, draggable);
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
}

function setTranslate(xPos, yPos, el) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = el.getBoundingClientRect();

    const maxX = containerRect.width - elementRect.width;
    const maxY = containerRect.height - elementRect.height;

    const clampedX = Math.max(0, Math.min(xPos, maxX));
    const clampedY = Math.max(0, Math.min(yPos, maxY));

    el.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
}





