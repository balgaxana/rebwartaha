// Replace the URL after a delay
window.addEventListener('load', function() {
    setTimeout(function() {
        var iframe = document.getElementById('myIframe');
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed/aPiKLan6Ai4?autoplay=1&list=RDaPiKLan6Ai4';
        } else {
            console.error('Iframe not found');
        }
    }, 1000); // Adjust the delay as needed
});
