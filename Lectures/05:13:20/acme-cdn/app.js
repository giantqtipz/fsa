// Netlify - https://gallant-lewin-08e9ad.netlify.app/#products
(() => {
    
    const links = document.querySelectorAll('a');
    const hash = window.location.hash;

    links.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.location.hash = event.target.id;
            getData(event.target.id);
        })
        window.addEventListener('hashchange', function(event) {
            event.preventDefault();
            link.classList.remove('selected'); // remove selected from all links, like innerHTML = '';
            document.querySelector(`${window.location.hash}`).classList.add('selected');
        });
    })
    

    const getData = (arg) => {
        axios.get(`https://acme-users-api-rev.herokuapp.com/api/${arg}`)
            .then(response => { render(response.data); })
            .catch(error => { throw new Error(error); })
    }

    const createHeaders = (arg) => {
        const tableHeader = document.querySelector('thead');
        const tableTitles = Object.keys(arg[0]);
        const headers = tableTitles.map((title) => {
            return `<th>${title.charAt(0).toUpperCase() + title.slice(1)}</th>`
        }).join('');

        tableHeader.innerHTML = '';
        return tableHeader.innerHTML = tableHeader.innerHTML + headers;
    }

    const populateRows = (arg) => {
        const tableBody = document.querySelector('tbody');
        const rows = arg.map((index) => { // turn the values into array indexes, to avoid using dot notation.
            return `<tr>   
                ${Object.values(index).map((value) => {
                    return `<td>${value}</td>`;
                }).join('')} 
            </tr>`
        }).join(''); // important to use .join('') twice or you'll get commas. Default map behavior

        tableBody.innerHTML = '';
        tableBody.innerHTML = tableBody.innerHTML + `<tr>${rows}</tr>`;
    }

    const render = (arg) => {
        createHeaders(arg);
        populateRows(arg);
    }

    getData(hash.slice(1));

})();