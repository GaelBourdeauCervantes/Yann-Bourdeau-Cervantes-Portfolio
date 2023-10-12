document.getElementById("bottonAboutMe").addEventListener("click", function() {
    const targetElement = document.getElementById("aboutMe");
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
});

document.getElementById("portfolio").addEventListener("click", function() {
    const targetElement = document.getElementById("seccionPortfolio");
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
});


contactButton = document.getElementById("contactUsButton");
console.log(contactButton)
elementoAparecer = document.getElementById("elementoAparecer");

contactButton.addEventListener("click", function() {
    if (elementoAparecer.style.display === "none" || elementoAparecer.style.display === "") {
        elementoAparecer.style.display = "block";
    } else {
        elementoAparecer.style.display = "none";
    }
});