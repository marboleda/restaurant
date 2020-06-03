const initialPageLoad = () => {
    const title = document.createElement('h1');
    const headline = document.createElement('h2');
    const navbar = document.createElement('div');
    const info = document.createElement('div');
    const content = document.getElementById('content');

    title.textContent = 'The Tropical Grill';
    title.setAttribute('id', 'restaurant-name')

    headline.textContent = "Succulent Filipino Comfort Food";
    headline.setAttribute('id', 'headline');

    navbar.setAttribute('id','navbar');
    const navbar_list = document.createElement('ul');
    const navbar_list_menu = document.createElement('li');
    const navbar_list_about = document.createElement('li');
    const navbar_list_contact = document.createElement('li');
    navbar_list_menu.textContent = 'Menu';
    navbar_list_menu.setAttribute('id','menu-button');
    navbar_list_about.textContent = 'About';
    navbar_list_about.setAttribute('id','about-button');
    navbar_list_contact.textContent = 'Contact';
    navbar_list_contact.setAttribute('id', 'contact-button')
    navbar_list.appendChild(navbar_list_menu);
    navbar_list.appendChild(navbar_list_about);
    navbar_list.appendChild(navbar_list_contact);
    navbar.appendChild(navbar_list);

    info.setAttribute('id','info');


    content.appendChild(title);
    content.appendChild(headline);
    content.appendChild(navbar);
    content.appendChild(info);
}

export default initialPageLoad