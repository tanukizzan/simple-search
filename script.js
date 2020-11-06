let wordInput = document.getElementById('window');
const speakButton = document.getElementById('speak-button');
const button = [
  document.getElementById('google'),
  document.getElementById('yahoo'),
  document.getElementById('bing'),
  document.getElementById('ddg')
];
const siteLink = [
  'http://www.google.co.jp/',
  'https://search.yahoo.co.jp/',
  'https://www.bing.com/',
  'https://duckduckgo.com/',
  'https://www.yahoo.co.jp/'
];

// google
button[0].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[0]);
  } else {
    window.open(siteLink[0] + 'search?q=' + encodeURIComponent(wordInput.value));
  }
}
wordInput.addEventListener('keypress', onkeypress);
function onkeypress(event) {
  if (event.keyCode === 13) {
    button[0].onclick();
  }
}

// yahoo
button[1].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[4]);
  } else {
    window.open(siteLink[1] + 'search?p=' + encodeURIComponent(wordInput.value));
  }
}

// bing
button[2].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[2]);
  } else {
    window.open(siteLink[2] + 'search?q=' + encodeURIComponent(wordInput.value));
  }
}

// duckduckgo
button[3].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[3]);
  } else {
    window.open(siteLink[3] + '&q=' + encodeURIComponent(wordInput.value));
  }
}

// 音声入力
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onend = () => {
  speakButton.style.color = '#5F6368';
}

recognition.onresult = (event) => {
  wordInput.value = event.results[0][0].transcript;
}

speakButton.onclick = () => {
  if ('SpeechRecognition' in window) {
    recognition.start();
    speakButton.style.color = '#dc143c';
  } else {
    alert('お使いのブラウザでは対応していません。');
  }
}