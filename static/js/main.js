var content = document.querySelector('.name');

function setValue(value) {
    content.textContent = value;
}

function getSubstring(value, idx) {
    return value.substring(0, idx);
}

var value = 'Keshav Singh';
var i = 1;
var idx = 1;

setInterval(function () {
    var substring = getSubstring(value, i);
    setValue(substring);

    if (i === value.length) {
        idx = -1;

    }

    if (i === 0) {
        idx = 1;
    }

    i = i + idx;

}, 100);
