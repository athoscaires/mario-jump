const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
audioStart = new Audio('./audio/theme.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')
textStart = document.querySelector('text-start')

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

    mario.src = './images/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';

    audioStart.play();
}

document.addEventListener('keydown', start);



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML="<img src='./images/fim.png' class='fim'>";

        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

        audioGameOver.play();

        function stopAudio(){
            audioGameOver.pause();
            }setTimeout(stopAudio, 8000);



        clearInterval(loop);

        function restart(){
            location.reload();
        }

        document.addEventListener('keydown', restart);
    }

},10);


document.addEventListener('keydown', jump);

