async function fetchData() {
    try {
        const response = await fetch('https://api.sampleapis.com/codingresources/codingResources');
        const data = await response.json();
        const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        data.forEach(item => {
            let row = tableBody.insertRow();
            row.innerHTML = `
                <td><a href="${item.url}">${item.description}</a></td>
                <td>${item.types.join(', ')}</td>
                <td>${item.topics.join(', ')}</td>
            `;
            
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);



function generateIntroduction() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var company = document.getElementById('company').value;

    var introduction = `Hello Mr(s). ${firstName} ${lastName} and thank you for calling ${company}!`;
    introduction += `\nMy name is Rafael, and I'm here to assist you today.`;
    introduction += `\nYou are calling from ${city}, ${state} ${zip}.`;

    document.getElementById('introductionOutput').innerText = introduction;
}