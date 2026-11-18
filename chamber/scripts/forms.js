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
    
    if (field == 'level') {
        const levelValue = params.get('level');
        let levelText = '';
        if (levelValue == 'gold') {
            levelText = 'Gold';
        } else if (levelValue == 'silver') {
            levelText = 'Silver';
        } else if (levelValue == 'bronze') {
            levelText = 'Bronze';
        } else {
            levelText = 'Non-profit';
        }
        document.querySelector('#level').textContent = levelText;
    } else {
        const target = document.querySelector(`#${field}`);
        target.textContent = params.get(field);
    }
});