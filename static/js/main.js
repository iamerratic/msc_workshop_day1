var contentRef = document.querySelector('#name');

(function (ref) {

    var content = 'Keshav Singh';
    var currentText = '';
    var idx = 0;
    var dir = 1;

    function setContent(text) {
        ref.innerText = text;
    }

    setInterval(function () {
        if (idx === content.length) {
            dir = -1;
        }

        if (idx === 0) {
            dir = 1;
        }

        currentText = content.substring(0, idx);
        setContent(currentText);
        idx = idx + dir;
    }, 100);


})(contentRef);