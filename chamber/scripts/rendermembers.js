const membersURL = 'data/members.json';
const directoryDiv = document.querySelector('#directory-cards');
const gridButton = document.querySelector('#grid-format');
const listButton = document.querySelector('#list-format');

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members);
    displayCards(data.members, directoryDiv);
}

const displayCards = (dataObject, cardTarget) => {
    dataObject.forEach((item) => {
        const level = ['member', 'silver', 'gold'][item.level - 1];
        const card = document.createElement('div');
        card.innerHTML = `<h2>${item.name}</h2>`+
        `<img src=${item.image} alt="photo of business location" width="64px">`+
        `<ul><li>Address: ${item.address}</li>`+
        `<li>Phone Number: ${item.phoneNumber}</li>`+
        `<li>Website: ${item.website}</li></ul>`;
        card.classList.value = `card ${level}`;
        cardTarget.appendChild(card);
    });
}

getMemberData();

gridButton.addEventListener('click', () => {
    directoryDiv.classList.value = 'grid';
});

listButton.addEventListener('click', () => {
    directoryDiv.classList.value = 'list';
});