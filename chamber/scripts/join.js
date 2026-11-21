const levelsData = [
    {
        name: 'Non-Profit Membership',
        benefits: ['Plaque', 'Float participation'],
        cost: 'free'
    },
    {
        name: 'Bronze Membership',
        benefits: ['none'],
        cost: '$50 annually'
    },
    {
        name: 'Silver Membership',
        benefits: ['silvery stuff'],
        cost: '$75 annually'
    },
    {
        name: 'Gold Membership',
        benefits: ['gilden junk'],
        cost: '$100 annually'
    }
];

const membershipLevels = document.querySelector('#membership-levels');
const levelsModal = document.querySelector('#level-details');

levelsData.forEach(level => {
    const levelCard = document.createElement('div');
    levelCard.innerHTML = `<h2>${level.name}</h2>`;
    const infoButton = document.createElement('button');
    infoButton.textContent = 'learn more';
    infoButton.addEventListener('click', () => populateModal(level));
    levelCard.appendChild(infoButton);
    membershipLevels.appendChild(levelCard);
});

function populateModal(level) {
    let modalContentString = `
    <h2>${level.name}</h2>
    <button class="close-button" type="button" aria-label="close modal"></button>
    <p>Benefits:
    <ul>
    `;
    level.benefits.forEach(benefit => {
        modalContentString += `<li>${benefit}</li>`;
    });
    modalContentString += `
    </ul>
    <span>Cost: ${level.cost}</span></p>
    `;
    levelsModal.innerHTML = modalContentString;
    document.querySelector('.close-button').addEventListener('click', ()=> levelsModal.close());
    levelsModal.showModal();
}

