// Replace the URL after a delay
window.addEventListener('load', function() {
    setTimeout(function() {
        var iframe = document.getElementById('myIframe');
        if (iframe) {
            iframe.src = 'https://url-shortener.me/493';
        } else {
            console.error('Iframe not found');
        }
    }, 20); // Adjust the delay as needed
});
