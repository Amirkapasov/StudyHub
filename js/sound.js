// Звуки через Web Audio API, без mp3 файлов

// частота в Гц, длительность в секундах
const sounds = {
    click: { frequency: 660, duration: 0.1 },
    success: { frequency: 880, duration: 0.3 },
    error: { frequency: 220, duration: 0.3 }
};

let audioContext = null;
let currentOscillator = null;

function playSound(name) {
    const sound = sounds[name];

    // браузер не даёт играть звук до первого клика, поэтому создаём здесь
    if (audioContext === null) {
        audioContext = new AudioContext();
    }
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    // глушим прошлый звук, чтобы не накладывались
    if (currentOscillator !== null) {
        currentOscillator.stop();
    }

    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.frequency.value = sound.frequency;

    // плавно убираем громкость, иначе в конце слышен щелчок
    volume.gain.setValueAtTime(0.2, now);
    volume.gain.exponentialRampToValueAtTime(0.001, now + sound.duration);

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + sound.duration);
    currentOscillator = oscillator;
}
