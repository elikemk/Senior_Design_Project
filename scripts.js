document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('');
    if(button) {
        button.addEventListener('click',() => {
            console.log('Redirecting...');
            window.location.href = 'index.html';
        })
    }
});
