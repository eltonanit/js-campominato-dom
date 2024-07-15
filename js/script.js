// Recupero la griglia
document.getElementById('generateGrid').addEventListener('click', function () {

    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const gameResult = document.getElementById('gameResult');
    gameResult.innerHTML = '';

    // Puliamo il contenitore prima di aggiungere nuove celle
    gridContainer.innerHTML = '';

    // Generiamo le 16 bombe
    let bomba = generateBomba(100);
    console.log("Bombe generate:", bomba);

    let nobomba = 0;
    let sibomba = false;

    // Generiamo le 100 celle
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;

        // Aggiungo evento click alla cella
        cell.addEventListener('click', function () {
            if (sibomba) return;

            if (bomba.includes(i)) {
                this.classList.add('bomb');
                console.log('Hai calpestato una bomba:', i);
                sibomba = true;
                gameResult.innerHTML = `<h3>Hai perso! Hai calpestato una bomba al numero ${i}. Punteggio: ${nobomba}</h3>`;
            } else {
                this.classList.add('active');
                console.log('Cella sicura cliccata:', i);
                nobomba++;

                if (nobomba === (100 - bomba.length)) {
                    sibomba = true;
                    gameResult.innerHTML = `<h3>Hai vinto! Hai cliccato tutte le celle sicure. Punteggio: ${nobomba}</h3>`;
                }
            }
        });

        // Appendo la cella al contenitore della griglia
        gridContainer.appendChild(cell);
    }
});