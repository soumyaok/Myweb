const typing = document.querySelector(".typing");
const phrases = ["Web Developer", "Creative Coder", "Tech Enthusiast"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loop() {
  typing.innerHTML = currentPhrase.join('');

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 50 : 100);
}

loop();
