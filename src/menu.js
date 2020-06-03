const displayMenu = () => {
    const menu = document.createElement('ul');

    for (let i = 0; i < 6; i++) {
        const menuItem = document.createElement('li');
        menuItem.setAttribute('data-menu-item', i.toString());
        menu.appendChild(menuItem);
    }
}

export default displayMenu