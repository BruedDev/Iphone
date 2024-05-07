function displayCurrentTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    // var seconds = currentTime.getSeconds();

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
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
    const currentSecond = currentDate.getSeconds();

    const formattedTime = `${currentHour}:${currentMinute}`;
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
    var formattedMinute = String(currentMinute).padStart(2, '0');

    var formattedTime = currentHour + ":" + formattedMinute;
    time.textContent = formattedTime;
}

updateCurrntTime();
setInterval(updateCurrntTime, 1000);
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
var lockIcon = document.querySelector('ion-icon[name="lock-closed-outline"]');
const password = '190603';
let clicks = 0;
let guess = '';

clearButton.addEventListener('click', function () {
    for (let i = 0; i < clicks; i++) {
        changeBgColor('transparent', i);
    }
    guess = '';
    clicks = 0;
    result.textContent = '';
});

function changeBgColor(color, number) {
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
        lockIcon.setAttribute('name', 'lock-open-outline');
        result.textContent = 'Mở khoá thành công';
        setTimeout(function () {
            containerFile.style.display = 'block';
            screen.style.display = 'none';
        }, 700);
    } else if (clicks === 6) {
        lockIcon.setAttribute('name', 'lock-closed-outline');
        setTimeout(function () {
            if (guess === password) {
                result.textContent = 'Mở khoá thành công';
                setTimeout(function () {
                    containerFile.style.display = 'block';
                    screen.style.display = 'none';
                }, 700);
            } else {
                result.textContent = 'Password: 190603';
            }

            changeBgColor('transparent', 0);
            changeBgColor('transparent', 1);
            changeBgColor('transparent', 2);
            changeBgColor('transparent', 3);
            changeBgColor('transparent', 4);
            changeBgColor('transparent', 5);
            guess = '';
            clicks = 0;
        }, 200);
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
const draggables = document.querySelectorAll('.draggable');
const assistouch = document.querySelectorAll('.container-assistouch');
const assistouchMenus = document.querySelectorAll('.assistouch-menu');

let initialX;
let initialY;
let isDragging = false;
let isClicked = false;
let currentDraggable;
let isContainerClicked = false;

assistouchMenus.forEach(menu => {
    menu.style.display = 'none';
});

assistouch.forEach((container, index) => {
    container.addEventListener('mousedown', function (e) {
        isClicked = true;
        isContainerClicked = true;
        dragStart(e, draggables[index]);
    });

    container.addEventListener('click', function (e) {
        if (isClicked && !isDragging && draggables[index].contains(e.target)) {
            assistouchMenus[index].style.display = 'block';
            assistouchMenus[index].style.animation = 'fadeIn .35s ease-in';
            draggables[index].style.display = 'none'; // Ẩn draggable tương ứng
            e.stopPropagation();
        }
    });
});

document.addEventListener('click', function (e) {
    assistouchMenus.forEach((menu, index) => {
        const rect = menu.getBoundingClientRect();
        if (
            e.clientX < rect.left ||
            e.clientX > rect.left + rect.width ||
            e.clientY < rect.top ||
            e.clientY > rect.top + rect.height
        ) {
            assistouchMenus[index].style.display = 'none';
            draggables[index].style.display = 'block';
            draggables[index].style.opacity = '1';
        }
    });
});

document.addEventListener('mousedown', function (e) {
    assistouchMenus.forEach(menu => {
        const rect = menu.getBoundingClientRect();
        const isInHorizontalBounds = e.clientX >= rect.left && e.clientX <= rect.right;
        const isInVerticalBounds = e.clientY >= rect.top && e.clientY <= rect.bottom;
        const isInsideMenuBounds = isInHorizontalBounds && isInVerticalBounds;

        if (!isContainerClicked && !isInsideMenuBounds) {
            menu.style.display = 'none';
        }
    });
    isContainerClicked = false;
});

function dragStart(e, draggable) {
    if (e.target === draggable) {
        initialX = e.clientX - draggable.getBoundingClientRect().left;
        initialY = e.clientY - draggable.getBoundingClientRect().top;

        isDragging = true;
        currentDraggable = draggable;
        currentDraggable.style.opacity = '1';
        assistouchMenus.forEach(menu => {
            menu.style.display = 'none';
        });
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }
}

function dragMove(e) {
    if (isDragging) {
        isClicked = false;
        e.preventDefault();

        const containerRect = currentDraggable.parentElement.getBoundingClientRect();
        const maxX = containerRect.width - currentDraggable.offsetWidth;
        const maxY = containerRect.height * 0.85 - currentDraggable.offsetHeight;

        const currentX = e.clientX - containerRect.left - initialX;
        const currentY = e.clientY - containerRect.top - initialY;

        const clampedX = Math.max(0, Math.min(currentX, maxX));
        const clampedY = Math.max(0, Math.min(currentY, maxY));

        currentDraggable.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    setTimeout(() => {
        currentDraggable.style.transition = 'opacity 1s';
        currentDraggable.style.opacity = '0.68';
    }, 2000);
}

function toggleAssistouchMenu() {
    assistouchMenus.forEach(menu => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
            menu.style.width = '250px';
            menu.style.height = '250px';
        }
    });
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
const containerFacebook = document.querySelector('.container-facebook');
const assistouchBL = document.querySelector('.container-assistouch');
const iconFacebook = document.getElementById('icon-facebook');
iconFacebook.addEventListener("click", function (facebook) {
    containerFacebook.classList.add('show');
    assistouchBL.style.display = 'none';
})
// block container-page
var containerPage = document.querySelector(".container-page");
const containerFaceboo = document.querySelector('.container-facebook');
var personal = document.getElementById("personal");
var back = document.querySelector(".back");
personal.addEventListener("click", function () {
    containerPage.classList.add('show');
});
personal.addEventListener("click", function () {
    containerFaceboo.classList.remove('show');
});
back.addEventListener("click", function () {
    containerPage.classList.remove('show');
});
back.addEventListener("click", function () {
    containerFaceboo.classList.add('show');
});
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

    reader.onload = function () {
        const imageUrl = reader.result;
        const imgCreateNew = document.querySelector('.background-createnews .img-createnew img');
        const userCreateNew = document.querySelector('.background-createnews .userCreatenew img');
        const userName = document.querySelector('.background-createnews:not([style*="display: none;"]) p');
        imgCreateNew.src = imageUrl;
        userCreateNew.src = "img/user.jpg";

        const backgrounds = document.querySelectorAll('.background-createnews');
        backgrounds.forEach(function (background) {
            background.style.display = 'block';
        });
    }

    reader.readAsDataURL(file);
});

