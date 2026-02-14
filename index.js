function rollDice() {
  document.getElementById("d1").value =
    Math.floor(Math.random() * 6) + 1;

  document.getElementById("d2").value =
    Math.floor(Math.random() * 6) + 1;
}
