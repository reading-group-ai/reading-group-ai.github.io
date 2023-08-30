function csvToJSON(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const result = [];
  
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const row = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = row[j].trim();
        }
        result.push(obj);
    }
    return result;
}

fetch('papers.csv')
    .then(response => response.text())
    .then(data => {
        const papers = csvToJSON(data);
        displayPapers(papers);
    });

function displayPapers(papers) {
    const papersSection = document.querySelector('.papers');
    papers.forEach(paper => {
        const paperDiv = document.createElement('div');
        paperDiv.classList.add('paper');
    
        const title = document.createElement('h2');
        title.innerHTML = `<a href="${paper.Link}" target="_blank">${paper.Title}</a> (${paper.Year}, ${paper.Source})`;
        paperDiv.appendChild(title);

        const presenter = document.createElement('p');
        presenter.textContent = `Presenter: ${paper.Presenter}`;
        paperDiv.appendChild(presenter);

        const date = document.createElement('p');
        date.textContent = `Date: ${paper.Date}`;
        paperDiv.appendChild(date);

        papersSection.appendChild(paperDiv);
    });
}
