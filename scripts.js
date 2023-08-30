// Fetch the CSV data
fetch('papers.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(', ');

        const table = document.getElementById('papersTable').getElementsByTagName('tbody')[0];

        // Start from 1 to skip the header row
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].split(', ');
            const row = table.insertRow(-1);  // Insert a new row at the last position

            for (let j = 0; j < cells.length; j++) {
                const cell = row.insertCell(j);
                if (j === 2) {
                    // Create a link for the paper
                    const link = document.createElement('a');
                    link.href = cells[j];
                    link.innerText = "View Paper";
                    link.target = "_blank";
                    cell.appendChild(link);
                } else {
                    cell.innerText = cells[j];
                }
            }
        }
    })
    .catch(error => {
        console.error('Error fetching the CSV data:', error);
    });
