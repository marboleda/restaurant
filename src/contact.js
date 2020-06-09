const displayContact = () => {
    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'THE TROPICAL GRILL';

    const address = document.createElement('p');
    address.innerHTML = `1000 Fake St<br>
    FakeCity, ON LLL 865`;

    const hoursHeader = document.createElement('h4');
    hoursHeader.textContent = 'Hours';

    const hours = document.createElement('p');
    hours.innerHTML = `<em>Monday - Friday</em>: 8:00am - 8:00pm<br>
    <em>Saturday</em>: 9:00am - 10:00pm<br>
    <em>Sunday</em>: 10:00am - 7:00pm`;

    document.getElementById('info').appendChild(restaurantName);
    document.getElementById('info').appendChild(address);
    document.getElementById('info').appendChild(hoursHeader);
    document.getElementById('info').appendChild(hours);
   
}

export default displayContact