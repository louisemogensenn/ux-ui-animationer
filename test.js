
//bestillingslisten

let total = 0;

function tilfojRet(retNavn, pris) {
    // Find det område, hvor vi viser bestillingslinjer
    const orderItems = document.getElementById('orderItems'); ///henter den div hvor vi vil sætte listen ind

    // Opret et nyt element for den tilføjede ret
    const newItem = document.createElement('div');
    newItem.className = 'order-item';

    // Indsæt indhold for den nye ret og tilføj en knap til at fjerne den
    newItem.innerHTML = `
        <p>${retNavn} --------- ${pris} kr.</p>
        <button class="remove-button" onclick="fjernRet(this, ${pris})">x</button> 
    `; //indsætter rettens navn og prisen fra html

    // Tilføj den nye valgte ret til bestillinglisten
    orderItems.appendChild(newItem);

    // Opdater den samlede pris
    total += pris;
    document.getElementById('totalPrice').innerHTML = `${total},-`; //henter den totale pris
}

function fjernRet(button, pris) {
    // Find det element, der skal fjernes
    const itemToRemove = button.parentElement;

    // Fjern elementet fra DOM'en
    itemToRemove.remove();

    // Træk prisen fra den samlede total
    total -= pris;
    document.getElementById('totalPrice').innerHTML = `${total},-`;
} //opdatere prisen igen ved total price id




//filter


function toggleFilterForm() { 
    const filterForm = document.getElementById('filterForm'); //variable for indtastning af pris
    filterForm.classList.toggle('hidden'); //skjuler
}

function applyPriceFilter() {
    const maxPrice = document.getElementById('priceFilter').value; //henter pris fra som er intastet i formen
    const allDishes = document.querySelectorAll('.kort'); //henter alle kort til all dish

    allDishes.forEach(dish => {
        const price = parseInt(dish.getAttribute('data-price'), 10); //henter prisen fra retterne 
        
        if (price <= maxPrice) {
            dish.style.display = 'block'; // Vis retten, hvis prisen er under maxPrice 
        } else {
            dish.style.display = 'none'; // Skjul retten, hvis den er er over prisen intastet prisfilteren -- altså (over maxPrice variablen)
        }
    });
}

function toggleHjerte(hjerteId) {
    const hjerteElement = document.getElementById(hjerteId); //henter hjertet fra html

    // Skift mellem de 2 billeder
    if (hjerteElement.src.includes('favoritter.webp')) {
        hjerteElement.src = 'images/favoritter2.webp'; // Skift til et fyldt hjerte
    } else {
        hjerteElement.src = 'images/favoritter.webp'; // Skift tilbage til det tomt hjerte
    }
}