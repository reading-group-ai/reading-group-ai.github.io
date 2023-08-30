document.addEventListener("DOMContentLoaded", function() {
    fetch('papers.csv')
        .then(response => response.text())
        .then(data => {
            const papers = csvToJSON(data);
            displayPapers(papers);
        });
});

function csvToJSON(csv) {
    const [header, ...rows] = csv.trim().split("\n");
    const keys = header.split(",");
    return rows.map(row => {
        const values = row.split(",");
        return keys.reduce((acc, key, i) => {
            acc[key.trim()] = values[i].trim();
            return acc;
        }, {});
    });
}

function displayPapers(papers) {
    const container = document.getElementById('papers-list');
    papers.forEach(paper => {
        const div = document.createElement('div');
        div.className = 'paper';
        div.innerHTML = `
            <div class="paper-title">${paper["Paper Title"]}</div>
            <div>Presenter: ${paper["Presenter Name"]}</div>
            <a href="${paper.Link}" class="paper-link" target="_blank">Read the paper</a>
            <div>Year: ${paper.Year}</div>
            <div>Source: ${paper.Source}</div>
        `;
        container.appendChild(div);
    });
}
