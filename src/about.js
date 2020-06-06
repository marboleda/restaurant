const displayAbout = () => {
    const about = document.createElement('p');

    about.innerHTML = `Come and enjoy your favorite tropical dishes at The Tropical Grill.<br>
    We use fresh ingredients and homemade recipes to create the best dining experience for you!<br>
    Order today!`;

    document.getElementById('info').appendChild(about);
}

export default displayAbout