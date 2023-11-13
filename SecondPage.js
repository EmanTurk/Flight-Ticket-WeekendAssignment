
const flights = [
    {
        id:0,
        from: "Ben-Gurion Airport",
        to:'Tokyo, Japan',
        price: 1800,
        dates:[
            {depart: new Date ('01.01.2024')},
            {return: new Date ('23.08.2024')}
        ]
    },
    {
        id:1,
        from: "Ben-Gurion Airport",
        to:'Berlin,Germany',
        price: 180,
        dates:[
            {depart: new Date ('26.08.2024')},
            {return: new Date ('12.10.2024')}
        ]
    },
    {
        id:2,
        from: "Berlin,Germany",
        to:'Moldova,Russia',
        price: 70,
        dates:[
            {depart: new Date ('01.02.2024')},
            {return: new Date ('10.11.2024')}
        ]
    },
    {
        id:3,
        from: "Ben-Gurion Airport",
        to:"China",
        price: 1520,
        dates:[
            {depart: new Date ('10.03.2025')},
            {return: new Date ('10.12.2026')}
        ]
    },
  
];
document.addEventListener('DOMContentLoaded', () => {
    const flightsList = document.getElementById('flightsList');
    flights.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.className = 'flight-ticket';
        flightDiv.innerHTML = `
            <div class="ticket-header">
                <h3>${flight.from} → ${flight.to}</h3>
            </div>
            <div class="ticket-body">
                <p><strong>Depart:</strong> ${flight.dates[0].depart.toLocaleDateString()}</p>
                <p><strong>Return:</strong> ${flight.dates[1].return.toLocaleDateString()}</p>
                <p><strong>Price:</strong> $${flight.price}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        flightsList.appendChild(flightDiv);
    });
});
