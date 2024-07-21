function Test() {
    let text = document.getElementById("test").innerHTML;
    if (text.includes("HTML")) {
        document.getElementById("test").innerHTML = text.replace("HTML", "JavaScript");
    } else {
        document.getElementById("test").innerHTML = text.replace("JavaScript", "HTML");
    }
}