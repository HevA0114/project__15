// Add a popup functionality
document.getElementById('popup-button').addEventListener('click', function () {
    alert(
        "Pwede ka po bang sumama sakin sa monday after ng class po natin para sa coffee date po, kung oo chat nyo po sakin 'punta tayo sa forever dada' if hindi well oo lang ang choice hehehehe"
    );
});

// Add floating hearts
const container = document.querySelector('.heart-container');

for (let i = 0; i < 50; i++) {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("class", "heart");
    heart.setAttribute("viewBox", "0 0 32 29.6");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;

    heart.innerHTML = `
        <path fill="pink" d="M23.6,0c-2.7,0-5.1,1.2-6.6,3C15.5,1.2,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4c0,3.4,1.4,6.3,3.6,8.4L16,29.6
        l12.4-10.8c2.2-2.1,3.6-5,3.6-8.4C32,4.7,27.3,0,23.6,0z"/>
    `;

    container.appendChild(heart);
}
