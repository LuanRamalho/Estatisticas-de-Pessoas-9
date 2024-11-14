function calcular() {
    const desktop = parseInt(document.getElementById('desktop').value) || 0;
    const notebook = parseInt(document.getElementById('notebook').value) || 0;
    const smartphone = parseInt(document.getElementById('smartphone').value) || 0;
    const tablet = parseInt(document.getElementById('tablet').value) || 0;

    const total = desktop + notebook + smartphone + tablet;
    document.getElementById('total').innerText = `Total de Pessoas Pesquisadas: ${total}`;

    if (total > 0) {
        updateProgressBar('desktop', desktop, total);
        updateProgressBar('notebook', notebook, total);
        updateProgressBar('smartphone', smartphone, total);
        updateProgressBar('tablet', tablet, total);
    } else {
        resetProgressBar('desktop');
        resetProgressBar('notebook');
        resetProgressBar('smartphone');
        resetProgressBar('tablet');
    }
}

function updateProgressBar(device, value, total) {
    const percent = (value / total) * 100;
    const progressBar = document.getElementById(`progress-${device}`);
    const percentLabel = document.getElementById(`percent-${device}`);
    
    progressBar.style.width = `${percent}%`;
    percentLabel.innerText = `${percent.toFixed(2)}%`;
}

function resetProgressBar(device) {
    const progressBar = document.getElementById(`progress-${device}`);
    const percentLabel = document.getElementById(`percent-${device}`);
    
    progressBar.style.width = '0%';
    percentLabel.innerText = '0%';
}
