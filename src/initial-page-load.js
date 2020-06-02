const initialPageLoad = () => {
    const title = document.createElement('h1');
    const headline = document.createElement('h2');
    const content = document.getElementById('content');

    title.textContent = 'The Tropical Grill';
    title.setAttribute('id', 'restaurant-name')
    headline.textContent = "Succulent Filipino Comfort Food";
    headline.setAttribute('id', 'headline');

    content.appendChild(title);
    content.appendChild(headline);
}

export default initialPageLoad