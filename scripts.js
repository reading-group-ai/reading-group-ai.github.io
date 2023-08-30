fetch('papers.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        let tableContent = `<thead>
            <tr>
                <th>Presenter Name</th>
                <th>Paper Title</th>
                <th>Link</th>
                <th>Year</th>
                <th>Source</th>
            </tr>
        </thead>
        <tbody>`;
        
        for(let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(',');
            tableContent += '<tr>';
            columns.forEach(column => {
                if (columns.indexOf(column) == 2) {
                    tableContent += `<td><a href="${column.trim()}" target="_blank">Link</a></td>`;
                } else {
                    tableContent += `<td>${column.trim()}</td>`;
                }
            });
            tableContent += '</tr>';
        }
        tableContent += '</tbody>';
        document.getElementById('papersTable').innerHTML = tableContent;
    });
