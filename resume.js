var list = document.querySelectorAll('#menu a');

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (event) {
        event.preventDefault();

        var name = this.textContent.trim().toLowerCase();
        var target = document.getElementById(name);

        var scroll = setInterval(function () {
            var cordinate = target.getBoundingClientRect();
            if (cordinate.y <= 150) {
                clearInterval(scroll);
            }
            window.scrollBy(0, 50);
        }, 30);
    })
}

var skillcontainer = document.getElementById('skill_id');
var skillpro = document.querySelectorAll('.skillprocess  div');
window.addEventListener('scroll', checkscroll);
var animation = false;

function initializebar() {
    for (let bar of skillpro) {
        bar.style.width = 0 + '%';
    }
}

initializebar();


function fillbar() {
    for (let bar of skillpro) {
        let level = bar.getAttribute('data-bar-width');
        let currentlevel = 0;
        var interval = setInterval(function () {
            if (currentlevel >= level) {
                clearInterval(interval);
                return;
            }

            bar.style.width = currentlevel + '%';
            currentlevel++;

        }, 5)
    }
}


function checkscroll() {
    var cordinate_skill = skillcontainer.getBoundingClientRect();
    if (!animation && cordinate_skill.top <= window.innerHeight) {
        animation = true;
        fillbar();
    }
    else if (cordinate_skill.top > window.innerHeight) {
        animation = false;
        initializebar();
    }
}

