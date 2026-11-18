const getString = window.location.search;
const params = new URLSearchParams(getString);
const results = document.querySelector('#results');

results.innerHTML = `
<p>Appointment for ${params.get('first')} ${params.get('last')}</p>
<p>Proxy ${params.get('ordinance')} on ${params.get('date')} in the ${params.get('location')} temple</p>
<p>Your phone: ${params.get('phone')}</p>
<p>Your email is ${params.get('email')}</p>
`;