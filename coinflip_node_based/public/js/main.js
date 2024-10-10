const flipButton = document.getElementById('flipButton')
const result = document.getElementById('result');

flipButton.addEventListener('click', () => {
    // send request to server to flip the coin


    fetch('/flip')
        .then(response => response.json())
        .then(data => {
            result.textContent = `The result is: ${data.outcome}`;
        })
        .catch(error => {
            result.textContent = 'Error fliping the coin.';
        });
})