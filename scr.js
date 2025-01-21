// Replace the URL after a delay
window.addEventListener('load', function() {
    setTimeout(function() {
        var iframe = document.getElementById('myIframe');
        if (iframe) {
            iframe.src = 'https://www.youtube.com/watch?v=aPiKLan6Ai4&list=RDaPiKLan6Ai4&start_radio=1';
        }
    }, 1000); // Adjust the delay as needed
});
