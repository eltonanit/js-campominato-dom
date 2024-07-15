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
