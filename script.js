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

// Just paste the whole block of links from the site between the backticks ``
const row1RawLinks = `
https://i.postimg.cc/pL8BdpjD/IMG-20250406-204253.jpg
https://i.postimg.cc/kg8y5BSN/IMG-20250406-204257.jpg
https://i.postimg.cc/2Svx5VWc/IMG-20250406-204259.jpg
https://i.postimg.cc/hGB1Qc8y/IMG-20250406-204304.jpg
https://i.postimg.cc/25D7Lrds/IMG-20250406-204309.jpg
https://i.postimg.cc/N0ck2B8V/IMG-20250406-204317.jpg
https://i.postimg.cc/8CSmfNBQ/IMG-20250415-165218.jpg
https://i.postimg.cc/s2r4Gs9j/IMG-20250415-165225.jpg
https://i.postimg.cc/5tVSQbqy/IMG-20250415-165227.jpg
https://i.postimg.cc/FKVgj8DF/IMG-20250415-165230.jpg
https://i.postimg.cc/257F4M2y/IMG-20250415-165233.jpg
https://i.postimg.cc/5yTw4V2x/IMG-20250415-WA0026.jpg
https://i.postimg.cc/2yM4kDS8/IMG-20250415-WA0028.jpg
https://i.postimg.cc/2jKdF4Fh/IMG-20250415-WA0030.jpg
https://i.postimg.cc/TPJqrFCW/IMG-20250428-143940.jpg
https://i.postimg.cc/8CmBh9td/IMG-20250428-143944.jpg
https://i.postimg.cc/R0LQcyXX/IMG-20250428-144012.jpg
https://i.postimg.cc/xCjGg54R/IMG-20250428-144014.jpg
https://i.postimg.cc/HxW03zh6/IMG-20250515-203201.jpg
https://i.postimg.cc/SsQLVdvw/IMG-20250525-210136.jpg
https://i.postimg.cc/Jn73KxFL/IMG-20250525-210139.jpg
https://i.postimg.cc/W3pmS8ys/IMG-20250525-210142.jpg
https://i.postimg.cc/gJMV7R9P/IMG-20250608-132905.jpg
https://i.postimg.cc/76B3R7vq/IMG-20250608-132915.jpg
https://i.postimg.cc/63HrPRsp/IMG-20250608-132922.jpg
https://i.postimg.cc/G2MFfY04/IMG-20250608-132935.jpg
https://i.postimg.cc/sfNP9p9W/IMG-20250608-WA0003.jpg
https://i.postimg.cc/MZF0byb9/IMG-20250720-WA0110.jpg
https://i.postimg.cc/PfRbzmzV/IMG-20260126-WA0052.jpg
https://i.postimg.cc/59R5qwqr/IMG-20260126-WA0053.jpg
https://i.postimg.cc/DfMQdqdt/IMG-20260126-WA0055.jpg
https://i.postimg.cc/5NQBP6nk/IMG-20260126-WA0056.jpg
https://i.postimg.cc/bNSx6s3W/IMG-20260126-WA0057.jpg
https://i.postimg.cc/qM6smzjW/IMG-20260126-WA0259.jpg
https://i.postimg.cc/WbqG9hXB/IMG-20260126-WA0270.jpg
https://i.postimg.cc/qM6smz1r/IMG-20260126-WA0296.jpg
https://i.postimg.cc/yY3mfkLs/IMG-20260126-WA0298.jpg
https://i.postimg.cc/15VGWfvm/IMG-20260126-WA0299.jpg
https://i.postimg.cc/ZKv8fCwY/IMG-20260126-WA0300.jpg
`.trim().split('\n'); // This turns the block of text into a clean list/array

const row2RawLinks = `
https://i.postimg.cc/85nv4SWp/IMG-20260129-WA0165.jpg
https://i.postimg.cc/RFbtdBfC/IMG-20260129-WA0176.jpg
https://i.postimg.cc/cH53hSYK/IMG-20260129-WA0177.jpg
https://i.postimg.cc/cH53hSYr/IMG-20260129-WA0178.jpg
https://i.postimg.cc/3RbG1Tp4/IMG-20260129-WA0179.jpg
https://i.postimg.cc/76Qz9k7z/IMG-20260129-WA0180.jpg
https://i.postimg.cc/bJFnghbH/IMG-20260129-WA0181.jpg
https://i.postimg.cc/1tYFBQ6K/IMG-20260129-WA0183.jpg
https://i.postimg.cc/yxgZrbXg/IMG-20260129-WA0184.jpg
https://i.postimg.cc/QC9TnykW/IMG-20260129-WA0185.jpg
https://i.postimg.cc/MHMQrFbV/IMG-20260129-WA0186.jpg
https://i.postimg.cc/NF9HPz78/IMG-20260129-WA0187.jpg
https://i.postimg.cc/wMymbGcc/IMG-20260129-WA0188.jpg
`.trim().split('\n');

const row3RawLinks = `
https://i.postimg.cc/R0LQcyXX/IMG-20250428-144012.jpg
https://i.postimg.cc/xCjGg54R/IMG-20250428-144014.jpg
https://i.postimg.cc/HxW03zh6/IMG-20250515-203201.jpg
https://i.postimg.cc/SsQLVdvw/IMG-20250525-210136.jpg
https://i.postimg.cc/Jn73KxFL/IMG-20250525-210139.jpg
https://i.postimg.cc/W3pmS8ys/IMG-20250525-210142.jpg
https://i.postimg.cc/gJMV7R9P/IMG-20250608-132905.jpg
https://i.postimg.cc/76B3R7vq/IMG-20250608-132915.jpg
https://i.postimg.cc/63HrPRsp/IMG-20250608-132922.jpg
https://i.postimg.cc/C5zGp1YQ/IMG-20260201-130432.jpg
https://i.postimg.cc/j2mzxbdF/IMG-20260201-130434.jpg
https://i.postimg.cc/KjwnG28X/IMG-20260201-130450.jpg
https://i.postimg.cc/RZQn8ffb/IMG-20260201-WA0017.jpg
https://i.postimg.cc/7ZMTc77d/IMG-20260201-WA0018.jpg
https://i.postimg.cc/bwH2Mbkc/IMG-20260201-WA0019.jpg
https://i.postimg.cc/sg9Z8SSk/IMG-20260201-WA0020.jpg
https://i.postimg.cc/P5z8cZYn/IMG-20260201-WA0021.jpg
https://i.postimg.cc/4xbhMtVJ/IMG-20260201-WA0022.jpg
`.trim().split('\n');

function populateRow(rowId, linksArray) {
    const row = document.getElementById(rowId);
    for (let i = 0; i < 2; i++) {
        linksArray.forEach(url => {
            if(url.trim() !== "") {
                const img = document.createElement('img');
                img.src = url.trim();
                row.appendChild(img);
            }
        });
    }
}

window.onload = () => {
    alignButtons(); // Keeps your No button level
    populateRow('row-1', row1RawLinks);
    populateRow('row-2', row2RawLinks);
    populateRow('row-3', row3RawLinks);
};