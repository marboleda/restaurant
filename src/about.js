const displayAbout = () => {
    const about = document.createElement('p');

    about.textContent = `Come and enjoy your favorite tropical dishes at The Tropical Grill.
    We use fresh ingredients and homemade recipes to create the best dining experience for you!
    Order today!`;

    document.getElementById('info').appendChild(about);
}

export default displayAbout