document.addEventListener("DOMContentLoaded", function() {
    fetch('papers.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1); // skip the header row
        let htmlContent = '';

        rows.forEach(row => {
            const [presenter, title, link, year, source] = row.split(',');
            htmlContent += `
                <tr>
                    <td>${presenter}</td>
                    <td>${title}</td>
                    <td><a href="${link}" target="_blank">Link</a></td>
                    <td>${year}</td>
                    <td>${source}</td>
                </tr>
            `;
        });

        document.querySelector('#papersTable tbody').innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching the CSV file:', error);
    });
});
