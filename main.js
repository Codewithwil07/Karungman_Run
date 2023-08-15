// Fungsi Background
var isMoving = true;
function setBackground() {
    if (isMoving == true) {
        setTimeout(function () {
            var bg = document.getElementById('board');
            bg.style.backgroundPosition =
                parseInt(bg.style.backgroundPosition.replace('px', '')) -
                2 +
                'px';

            // Fungsi Score
            document.querySelector('#score').innerHTML =
                parseInt(document.querySelector('#score').innerHTML) + 1;
            // panggil fungsi (recursive)
            setBackground();
        }, 1);
    }
}
// inisialisasi fungsi
setBackground();

// Fungsi Box
function setBox() {
    var box = document.getElementById('box');
    var obj = document.getElementById('obj');
    setTimeout(function () {
        box.style.marginLeft =
            parseInt(box.style.marginLeft.replace('px', '')) - 2 + 'px';

        if (parseInt(box.style.marginLeft.replace('px', '')) < 0) {
            box.style.marginLeft = '800px';
        }

        if (
            obj.offsetTop + 50 >= box.offsetTop &&
            obj.offsetLeft + 50 >= box.offsetLeft &&
            obj.offsetTop + 50 <= box.offsetTop + 50 &&
            obj.offsetLeft + 50 <= box.offsetLeft + 50
        ) {
            isMoving = false;
            setgameOver();
        } else {
            setBox();
            Start();
        }
    }, 1);
}
setBox();

// start
function Start() {
    let starts = document.getElementById('key');
    setTimeout(() => {
        starts.style.opacity = '0';
    }, 1000);
}

// Game_over
function setgameOver() {
    let game_over = document.getElementById('game_over');
    let bg_over = document.getElementById('board');
    game_over.style.visibility = 'visible';
    setTimeout(() => {
        game_over.setAttribute('class', 'fas fa-arrow-rotate-backward');
        bg_over.style.animation = 'kedip 1s infinite';
        bg_over.style.opacity = '1';
    }, 100);
    game_over.addEventListener('click', () => {
        location.reload();
    });
}

// untuk mendeteksi Tmbl Spasi
window.addEventListener('keyup', function (e) {
    // setting obj loncat
    if (e.keyCode == 38) {
        document.getElementById('obj').style.top = '20px';
        // objkembali ke posisi awal
        setTimeout(() => {
            document.getElementById('obj').style.top = '104px';
        }, 1000);
    }
});
