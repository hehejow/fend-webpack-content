function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch(`https://api.api-ninjas.com/v1/animals?name=${formText}`, {
        headers: {
            'X-Api-Key': 'KyPZNOaKqVwPjgqUQJEcyQ==tdazg35srPJ1jk5O'
        }
    })
        .then(res => res.json())
        .then(function (data) {
            console.log(data); // Log the data object to inspect its structure
            const locations = data[0].locations;
            document.getElementById('results').innerHTML = data[0].locations.join(', ');
        })
        .catch(error => console.error('Request failed:', error));
}

export { handleSubmit }