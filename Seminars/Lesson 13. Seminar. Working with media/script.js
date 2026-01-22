const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeSlider = document.getElementById('volumeSlider');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
let isPlaying = false;

// Функция для форматирования времени в формат MM:SS
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playPauseBtn.innerHTML = '<img src="img//play-solid-full.svg" alt="Play">';
    } else {
        video.play();
        playPauseBtn.innerHTML = '<img src="img/pause-solid-full.svg" alt="Pause">';
    }
    isPlaying = !isPlaying;
});

// Обновление кнопки Play/Pause при окончании видео
video.addEventListener('ended', () => {
    video.pause();
    playPauseBtn.innerHTML = '<img src="img/play-solid-full.svg" alt="Play">';
    isPlaying = false;
    video.currentTime = 0; // Вернуть видео в начало
    progressBar.value = 0; // Сбросить прогресс-бар
    currentTimeDisplay.textContent = '0:00'; //Обновить отображение времени
});

// Progress bar
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.value = percentage;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
});

progressBar.addEventListener('click', (e) => {
    const clickPosition = e.offsetX / progressBar.offsetWidth;
    video.currentTime = clickPosition * video.duration;
});

// Volume
volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
});

// Отображение общей продолжительности видео
video.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(video.duration);
});
