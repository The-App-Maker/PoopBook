function flushPost(postId) {
    const post = document.getElementById(postId);
    const content = post.querySelector('p').innerText;

    // 1. Play the 'Flush' animation
    post.classList.add('flushed');

    // 2. Flag to the 'Plumber' (You)
    console.log(`🚩 PLUMBER ALERT: Post "${content}" was flushed for being non-poopy.`);

    // 3. Remove from view after animation
    setTimeout(() => {
        post.style.display = 'none';
        alert("Swoosh! That non-poopy trash is gone.");
    }, 500);
}
// Load existing poops from memory or start with an empty list
let poopLogs = JSON.parse(localStorage.getItem('poopLogs')) || [];

function renderFeed() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear feed before reloading

    poopLogs.forEach((log, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.id = `post-${index}`;
        postDiv.innerHTML = `
            <p>${log}</p>
            <button class="flush-btn" onclick="flushPost(${index})">FLUSH IT! 🚽</button>
        `;
        feed.appendChild(postDiv);
    });
}

function addPost() {
    const input = document.getElementById('poop-input');
    if (input.value.trim() === "") return;

    // Add to our list and save to Local Storage
    poopLogs.unshift(input.value); // unshift puts the newest poop at the top!
    localStorage.setItem('poopLogs', JSON.stringify(poopLogs));
    
    input.value = ""; // Clear input
    renderFeed(); // Update the screen
}

function flushPost(index) {
    const postElement = document.getElementById(`post-${index}`);
    postElement.classList.add('flushed');

    // Remove from our data after the animation
    setTimeout(() => {
        poopLogs.splice(index, 1);
        localStorage.setItem('poopLogs', JSON.stringify(poopLogs));
        renderFeed();
    }, 500);
}

// Show the feed when the page first loads
renderFeed();

