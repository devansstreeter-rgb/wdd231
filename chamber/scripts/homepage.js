import {getMemberData, displayCards} from './rendermembers.js';

const spotlights = document.querySelector('#spotlights');
const currentEvents = document.querySelector('#current-events');

async function spotlightCards() {
    const rawMemberData = await getMemberData();
    const validMembers = rawMemberData.members.filter(member => member.level > 1);
    const selectedMembers = [];
    for (let i=1; i<3; i++) {
        const memberIndex = Math.floor(Math.random() * validMembers.length)
        selectedMembers.push(validMembers[memberIndex]);
        validMembers.splice(memberIndex, 1);
    }
    displayCards(selectedMembers, spotlights);
}

async function renderCurrentEvents() {
    const response = await fetch('data/current-events.json');
    const eventsData = await response.json();
    eventsData.events.forEach(event => {
        const eventCard = document.createElement('article');
        eventCard.innerHTML = `<details><summary>${event.title}</summary><p>${event.content}</p></details>`;
        currentEvents.appendChild(eventCard);
    });
}
renderCurrentEvents();
spotlightCards();