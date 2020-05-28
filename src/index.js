const title = document.createElement('h1');
const headline = document.createElement('h2');
const content = document.getElementById('content');

title.textContent = "The Tropical Grill";
headline.textContent = "Succulent Filipino Comfort Food";

content.appendChild(title);
content.appendChild(headline);