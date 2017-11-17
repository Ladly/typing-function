function typeText(stringToDisplay, parentEl, wantedDisplayElement, speed) {
  var array = stringToDisplay.split("");
  var i = 0;
  setInterval(function() {
    if (i < array.length) {
      var letter = document.createElement(wantedDisplayElement);
      letter.append(array[i]);
      parentEl.append(letter);
      i++;
    } else return;
  }, speed);
}
