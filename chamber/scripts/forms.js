const params = new URLSearchParams(window.location.search);
const confirmation = document.querySelector('#confirmation');
params.set('timestamp', new Date());

const requiredFields = [
    'first-name',
    'last-name',
    'email',
    'phone',
    'business-name',
    'level',
    'timestamp'
];


requiredFields.forEach(field => {
    const target = document.querySelector(`#${field}`);
    target.textContent = params.get(field);
});