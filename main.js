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
// time container-page
function CurTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = formatTimeComponent(hours);
    minutes = formatTimeComponent(minutes);

    var timeString = hours + ":" + minutes;

    document.getElementById("cur-time").textContent = timeString;
}

function formatTimeComponent(component) {
    return component < 10 ? "0" + component : component;
}

setInterval(CurTime, 1000);
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

function updateCurrntTime() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var formattedTime = currentHour + ":" + currentMinute;
    time.textContent = formattedTime;
}

updateCurrntTime();
setInterval(updateCurrentTime, 1000);
// time container-facebook
function updateCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeElement = document.getElementById("current-time-facebook");
    timeElement.textContent = hours + ":" + minutes;
}

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
const screen = document.querySelector('.container-password');
const subText = document.querySelectorAll('.letters');
const zero = document.querySelector('.zero');
const containerFile = document.querySelector('.container-file');
const result = document.querySelector('.result');
const clearButton = document.querySelector('.cancel-01');
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
        changeBgColor('#fff', clicks);
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
    clearButton.addEventListener('click', function () {
        if (clicks > 0) {
            changeBgColor('transparent', clicks - 1);
            guess = guess.slice(0, -1);
            clicks--;
            console.log(guess);
        }
    });
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

let initialX;
let initialY;
let isDragging = false;

container.addEventListener('mousedown', dragStart);

function dragStart(e) {
    if (e.target === draggable) {
        initialX = e.clientX - draggable.getBoundingClientRect().left;
        initialY = e.clientY - draggable.getBoundingClientRect().top;

        isDragging = true;

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }
}

function dragMove(e) {
    if (isDragging) {
        e.preventDefault();

        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - draggable.offsetWidth;
        const maxY = containerRect.height - draggable.offsetHeight;

        const currentX = e.clientX - containerRect.left - initialX;
        const currentY = e.clientY - containerRect.top - initialY;

        const clampedX = Math.max(0, Math.min(currentX, maxX));
        const clampedY = Math.max(0, Math.min(currentY, maxY));

        draggable.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
}

// clear


//
const createnewsContainer = document.querySelector('.createnews');
const contentCreatenews = document.querySelector('.content-createnews');

let isDraggin = false;
let curreX;
let initiaX;
let xOffse = 0;

function dragStar(e) {
    initiaX = e.clientX || e.touches[0].clientX;
    isDraggin = true;
}

function dragEn() {
    isDraggin = false;
}

function dragMov(e) {
    if (isDraggin) {
        e.preventDefault();

        curreX = e.clientX || e.touches[0].clientX;
        xOffset = curreX - initiaX;

        createnewsContainer.scrollLeft -= xOffset;
        initiaX = curreX;
    }
}
contentCreatenews.addEventListener('mousedown', dragStar);
contentCreatenews.addEventListener('touchstart', dragStar);

contentCreatenews.addEventListener('mouseup', dragEn);
contentCreatenews.addEventListener('mouseleave', dragEn);
contentCreatenews.addEventListener('mousemove', dragMov);
contentCreatenews.addEventListener('touchend', dragEn);
contentCreatenews.addEventListener('touchmove', dragMov);
// block container-facebook
function facebook() {
    const containerFacebook = document.querySelector('.container-facebook');
    containerFacebook.style.display = 'block';
    containerFacebook.scrollIntoView({ behavior: 'smooth' });
}
// block container-page
function blockContainerPage() {
    var containerPage = document.querySelector(".container-page");
    containerPage.style.display = "block";
}
// show like
const likeElement = document.querySelector('.like');
const additionalIcons = document.querySelector('.additional-icons');

likeElement.addEventListener('mouseenter', () => {
    additionalIcons.style.display = 'flex';
});

likeElement.addEventListener('mouseleave', () => {
    additionalIcons.style.display = 'none';
});

function replaceIcon(iconName) {
    const mainIcon = document.querySelector('.like ion-icon:first-child');
    mainIcon.setAttribute('name', iconName);

    const additionalIcons = document.querySelectorAll('.additional-icons ion-icon');
    additionalIcons.forEach(icon => {
        if (icon.getAttribute('name') === iconName) {
            icon.classList.add('selected');
        } else {
            icon.classList.remove('selected');
        }
    });
}

// upload image
document.querySelector('.upload').addEventListener('click', function () {
    document.getElementById('imageInput').click();
});

// Function to handle image upload
document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Load image to display
    reader.onload = function () {
        const imageUrl = reader.result;
        const imgCreateNew = document.querySelector('.background-createnews .img-createnew img');
        const userCreateNew = document.querySelector('.background-createnews .userCreatenew img');
        const userName = document.querySelector('.background-createnews:not([style*="display: none;"]) p');
        imgCreateNew.src = imageUrl;
        userCreateNew.src = "img/user.jpg";

        // Hiển thị phần tử .background-createnews nếu ẩn
        const backgrounds = document.querySelectorAll('.background-createnews');
        backgrounds.forEach(function (background) {
            background.style.display = 'block';
        });
    }

    reader.readAsDataURL(file);
});

