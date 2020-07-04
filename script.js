const btn = document.getElementById('button');

const calcTva = () => {
    const sum = document.getElementById('sum').value;
    const selectProcent = document.getElementById('select-procent').value;
    const valTva = document.getElementById('valoare-tva');
    const sumTva = document.getElementById('suma-cu-TVA');

    // Obtinere valoare TVA
    let total = sum * selectProcent;
    // Eliminare zerouri
    total = Math.round(total * 100) / 100;
    // Obtinere valoare sum cu TVA 
    let sumCuTva = Number(total) + Number(sum);
    
    // Afisare valori in UI
    valTva.textContent = total;
    sumTva.textContent = sumCuTva;

}

// On Load
btn.onclick = () => {
    calcTva();
};