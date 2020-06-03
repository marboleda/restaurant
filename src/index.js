import initialPageLoad from './initial-page-load';
import displayMenu from './menu';
import displayAbout from './about';
import displayContact from './contact';

initialPageLoad();

const clearInfo = () => {
    document.getElementById('info').textContent = "";
}

document.getElementById('menu-button').addEventListener('click', () => {
    clearInfo();
    displayMenu();
});

document.getElementById('about-button').addEventListener('click', () => {
    clearInfo();
    displayAbout();
});

document.getElementById('contact-button').addEventListener('click', () => {
    clearInfo();
    displayContact();
});