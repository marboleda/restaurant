import FriedFishPic from './assets/images/fried-fish.jpg'

const displayMenu = () => {
    const menu = document.createElement('ul');

    for (let i = 0; i < 6; i++) {
        const menuItem = document.createElement('li');
        menuItem.setAttribute('data-menu-item', i.toString());
        menu.appendChild(menuItem);
    }

    document.getElementById('info').appendChild(menu);

    const description0 = document.createElement('h3');
    description0.textContent = 'Fried Fish';
    const image0 = document.createElement('img');
    image0.src = FriedFishPic;
    const menuItem0 = document.querySelector(`[data-menu-item='0']`);
    menuItem0.appendChild(description0);
    menuItem0.appendChild(image0);
    

    const description1 = document.createElement('h3');
    description1.textContent = 'Roast Pork';

    const description2 = document.createElement('h3');
    description2.textContent = 'Fried Rice';

    const description3 = document.createElement('h3');
    description3.textContent = 'Fruit Platter';

    const description4 = document.createElement('h3');
    description4.textContent = 'Guava Juice';

    const description5 = document.createElement('h3');
    description5.textContent = 'Cheesecake'
}

export default displayMenu