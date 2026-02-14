function rollDice() {
    document.getElementById("d1").value =
        Math.floor(Math.random() * 6) + 1;

    document.getElementById("d2").value =
        Math.floor(Math.random() * 6) + 1;
            
    document.getElementById("d3").value =
        Math.floor(Math.random() * 6) + 1;

    document.getElementById("d4").value =
        Math.floor(Math.random() * 6) + 1;

    document.getElementById("d5").value =
        Math.floor(Math.random() * 6) + 1;

}
