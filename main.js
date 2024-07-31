// cursor
document.onclick = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement('span');
    span.classList.add('click_effect');
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 600);
}

function updateTimeByClass(className) {
    function updateCurrentTime() {
        var currentTime = new Date();
        var currentHour = currentTime.getHours();
        var currentMinute = currentTime.getMinutes();
        var formattedMinute = String(currentMinute).padStart(2, '0');

        var formattedTime = currentHour + ":" + formattedMinute;

        var timeElements = document.getElementsByClassName(className);
        for (var i = 0; i < timeElements.length; i++) {
            timeElements[i].textContent = formattedTime;
        }
    }

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
}

// Gọi hàm với lớp "current-time"
updateTimeByClass("current-time");

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

// date
function updateDateByClass(className) {
    function updateCurrentDate() {
        var days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        var currentTime = new Date();
        var dayOfWeek = days[currentTime.getDay()];
        var day = currentTime.getDate();
        var month = currentTime.getMonth() + 1;
        var year = currentTime.getFullYear();

        var formattedDate = dayOfWeek + " " + day + " - " + month + " - " + year;

        var dateElements = document.getElementsByClassName(className);
        for (var i = 0; i < dateElements.length; i++) {
            dateElements[i].textContent = formattedDate;
        }
    }

    updateCurrentDate();
    setInterval(updateCurrentDate, 86400000);
}
updateDateByClass("date");



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
let wrongAttempts = 0;
let lockTimeout;

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

function startLockTimer() {
    const endTime = Date.now() + 10000;

    function updateTimer() {
        const remainingTime = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        result.innerText = `Nhập sai quá nhiều lần. Vui lòng thử lại sau ${remainingTime} giây.`;
        if (remainingTime > 0) {
            setTimeout(updateTimer, 1000);
        } else {
            spanContainer.style.display = 'block';
            spanContainer.style.display = 'flex';
            result.textContent = '';
            wrongAttempts = 0;
            guess = '';
            clicks = 0;
        }
    }

    spanContainer.style.display = 'none';
    updateTimer();
}

parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (spanContainer.style.display === 'none') return;
        changeBgColor('#fff', clicks);
        clicks += 1;
        guess += e.target.className;
        console.log(guess);
    } else if (e.target.className === 'cancel') {
        if (spanContainer.style.display === 'none') return;
        clicks -= 1;
        changeBgColor('transparent', clicks);
        guess = guess.slice(0, -1);
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
        wrongAttempts += 1;
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
            if (wrongAttempts >= 3) {
                startLockTimer();
            }
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
        spanContainer.style.display = 'flex'
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
            draggables[index].style.display = 'none';
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

function dragEnd(e) {
    isDragging = false;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);

    const containerRect = currentDraggable.parentElement.getBoundingClientRect();
    const draggableRect = currentDraggable.getBoundingClientRect();
    const middlePoint = containerRect.left + containerRect.width / 2;

    if (draggableRect.left < middlePoint) {
        currentDraggable.style.transform = `translate(0px, ${draggableRect.top - containerRect.top}px)`;
    } else {
        const rightPosition = containerRect.width - currentDraggable.offsetWidth;
        currentDraggable.style.transform = `translate(${rightPosition}px, ${draggableRect.top - containerRect.top}px)`;
    }

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

// block container-facebook
document.addEventListener("DOMContentLoaded", function () {
    const containerFacebook = document.querySelector('.container-facebook');
    const assistouchBL = document.querySelector('.container-assistouch');
    const iconFacebooks = document.querySelectorAll('#icon-facebook'); // Sử
    const backUpFile = document.querySelector(".back-up-file");
    const backUpFil = document.querySelector(".back-up-fil");
    const ctnFile = document.querySelector(".container-file");
    const containerGame = document.querySelector(".container-game");
    const Game = document.querySelector("#game");

    iconFacebooks.forEach(iconFacebook => {
        iconFacebook.addEventListener("click", function () {
            containerFacebook.classList.toggle('show');
            if (containerFacebook.classList.contains('show')) {
                ctnFile.style.display = 'none';
                assistouchBL.style.display = 'none';
            }
        });
    });

    backUpFile.addEventListener('click', () => {
        containerFacebook.classList.remove('show');
        ctnFile.style.display = 'block';
        assistouchBL.style.display = 'block';
    });
    Game.addEventListener('click', () => {
        containerGame.classList.add('show');
    });
    backUpFil.addEventListener('click', () => {
        ctnFile.classList.add('show');
        containerGame.classList.remove('show');
    });
});

// block container-page
var containerPage = document.querySelector(".container-page");;
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

document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const imageUrl = reader.result;
        const imgCreateNew = document.querySelector('.background-createnews .img-createnew img');
        const userCreateNew = document.querySelector('.background-createnews .userCreatenew img');
        const userName = document.querySelector('.background-createnews:not([style*="display: none;"]) p');
        imgCreateNew.src = imageUrl;
        userCreateNew.src = "img/user-fb.jpg";

        const backgrounds = document.querySelectorAll('.background-createnews');
        backgrounds.forEach(function (background) {
            background.style.display = 'block';
        });
    }

    reader.readAsDataURL(file);
});

const createnews = document.querySelector('.createnews');
let isDown = false;
let startX;
let scrollLeft;

createnews.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - createnews.offsetLeft;
    scrollLeft = createnews.scrollLeft;
});

createnews.addEventListener('mouseleave', () => {
    isDown = false;
});

createnews.addEventListener('mouseup', () => {
    isDown = false;
});

createnews.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - createnews.offsetLeft;
    const walk = (x - startX) * 1;
    createnews.scrollLeft = scrollLeft - walk;
});


// slider

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        slideChange: function () {
            const pagination = document.querySelector('.swiper-pagination');
            const containerFile = document.querySelector('.container-file');
            if (swiper.activeIndex === 0) {
                pagination.classList.remove('hide-pagination');

                containerFile.classList.remove('overlay-effect');
            } else if (swiper.activeIndex === 1) {
                containerFile.classList.add('overlay-effect');
                pagination.classList.remove('show-pagination'); pagination.classList.add('hide-pagination');
            } else {
                pagination.classList.remove('show-pagination');
                pagination.classList.add('hide-pagination');

                containerFile.classList.remove('overlay-effect'); // Xóa hiệu ứng bóng mờ nếu không ở trang thứ 2
            }
        },
    },
});
document.querySelector('.swiper').addEventListener('touchstart', function () {
    const pagination = document.querySelector('.swiper-pagination');
    pagination.classList.remove('hide-pagination');
    pagination.classList.add('show-pagination');
});

// navbar
var tabs = document.getElementsByClassName('nav-item');
var hump = document.getElementById('flexure');
var humpLeftFromWindow = hump.getBoundingClientRect().left;

var active = tabs[0];

function select(el) {
    active.classList.remove('active');
    active = el;
    active.classList.add('active');

    hump.style.left = active.getBoundingClientRect().left - humpLeftFromWindow;
}

select(active);

// autoplay
var iter = 0;
setInterval(() => {
    iter = ++iter >= tabs.length ? 0 : iter;
    select(tabs[iter]);
}, 1500);
