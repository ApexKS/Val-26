const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// This function aligns 'No' perfectly level with 'Yes' on startup
function alignButtons() {
    const rect = yesBtn.getBoundingClientRect();
        
// Match the top edge exactly
    noBtn.style.top = rect.top + 'px';
        
// Place it to the right of Yes with a 20px gap
noBtn.style.left = (rect.right + 20) + 'px';
        
// Ensure the heights match for a perfect level look
noBtn.style.height = yesBtn.offsetHeight + 'px';
}

// Align on load and if the window is resized
window.onload = alignButtons;
window.onresize = alignButtons;

const moveButton = (e) => {
    if(e) e.preventDefault();
        
// Boundaries to keep it on screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
};

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton);

function showLove() {
    console.log("Yes button clicked!"); // This helps you debug!

    // 1. Hide the original question card
    const card = document.getElementById('valentine-card');
    if (card) card.style.display = 'none';
    
    // 2. Hide the runaway No button
    const noBtn = document.getElementById('no-btn');
    if (noBtn) noBtn.style.display = 'none';
    
    // 3. Show the new collage page
    const overlay = document.getElementById('collage-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        console.log("Overlay is now visible");
    } else {
        console.error("Could not find the element with id 'collage-overlay'");
    }
}