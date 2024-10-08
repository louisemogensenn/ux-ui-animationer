let total = 0;

function tilfojRet(retNavn, pris) {
    // Find det område, hvor vi viser bestillingslinjer
    const orderItems = document.getElementById('orderItems');
    
    // Tilføj den nye ret som et nyt afsnit
    const newItem = document.createElement('p');
    newItem.innerHTML = `${retNavn} --------- ${pris} kr.`;
    orderItems.appendChild(newItem);
    
    // Opdater den samlede pris
    total += pris;
    document.getElementById('totalPrice').innerHTML = `${total},-`;
}