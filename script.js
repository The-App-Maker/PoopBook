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
