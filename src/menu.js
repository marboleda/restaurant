import FriedFishPic from './assets/images/fried-fish.jpg'
import PorkBBQ from './assets/images/pork-bbq.jpg'
import FriedRice from './assets/images/fried-rice.jpg'
import CoconutJuice from './assets/images/coconut-juice.jpg'
import MangoSmoothie from './assets/images/mango-smoothie.jpg'
import FreshPapaya from './assets/images/fresh-papaya.jpg'

const displayMenu = () => {

    const createMenuLayout = () => {
        const menu = document.createElement('ul');

        for (let i = 0; i < 6; i++) {
            const menuItem = document.createElement('li');
            menuItem.setAttribute('data-menu-item', i.toString());
            menu.appendChild(menuItem);
        }
    
        document.getElementById('info').appendChild(menu);
    }

    const addMenuItem = (menuItemNum) => {
        const description = document.createElement('h3');
        const image = document.createElement('img');
        switch(menuItemNum) {
            case 0:
                description.textContent = 'Fried Fish';
                image.src = FriedFishPic;
                break;
            case 1:
                description.textContent = 'Pork BBQ';
                image.src = PorkBBQ;
                break;
            case 2:
                description.textContent = 'Fried Rice';
                image.src = FriedRice;
                break;
            case 3:
                description.textContent = 'Coconut Juice';
                image.src = CoconutJuice;
                break;
            case 4:
                description.textContent = 'Mango Smoothie';
                image.src = MangoSmoothie;
                break;
            case 5:
                description.textContent = 'Fresh Papaya';
                image.src = FreshPapaya;
                break;
            default:
                //nothing
        }
        const menuItem = document.querySelector(`[data-menu-item='${menuItemNum}']`)
        menuItem.appendChild(description);
        menuItem.appendChild(image);
    }

    createMenuLayout();
    for (let i=0; i < 6; i++) {
        addMenuItem(i);
    }

}

export default displayMenu