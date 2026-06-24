// =========================
// TOOL SEARCH
// =========================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let searchValue = searchBox.value.toLowerCase();

        let toolCards = document.querySelectorAll(".tool-card");

        toolCards.forEach(card => {

            let cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} MyTools. All Rights Reserved.`;

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// TOOL CARD ANIMATION
// =========================

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

        card.style.transform =
            "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

// =========================
// PAGE LOADED MESSAGE
// =========================

window.addEventListener("load", () => {

    console.log("MyTools Loaded Successfully");

});