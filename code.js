function search() {
    var input = document.getElementById("input").value;
    var letter = document.getElementById("letter");
    letter.innerHTML = input;

    if (input !== "") {
        var regExp = new RegExp(input, "gi");
        var p = document.getElementById("p");
        p.style.color = "#fff";
        // p.style.fontSize = "font-size: 1.2rem"
        p.innerHTML = p.textContent.replace(regExp,"<mark>$&</mark>" );
    }
}