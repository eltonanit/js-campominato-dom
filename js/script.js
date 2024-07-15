// Recupero la griglia
document.getElementById('generateGrid').addEventListener('click', function () {

    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    // Genero le celle
    for (let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.textContent = i;

        // Aggiungiamo l'evento click alla cella con add event listener
        square.addEventListener('click', function () {

            // Colora la cella di azzurro
            this.classList.toggle('active');

            // Mostra il numero della cella in console
            console.log('Cella cliccata:', i);
        });

        // Appendo  la cella al contenitore della griglia
        grid.appendChild(square);
    }
});