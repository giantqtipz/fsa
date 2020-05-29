const tableBody = document.querySelector("tbody");

let url = `https://acme-users-api-rev.herokuapp.com/api/users/search/`;

let hash = window.location.hash.substr(1);

const input = document.querySelector('input');
const error = document.querySelector('.error');
const button = document.querySelector('button');

let state = [];

const getData = function(val){
  console.log(val);
  axios.get(val)
  .then(function (response) {
    let users = response.data.users;
    if(response.data.count === 0){
      error.innerText = 'Name does not exist, please try again';
    } else {
      error.innerText = '';
      state = users;
      render();
    }
  })
  .catch(function (error) {
    error.innerText = 'Encountered issues fetching data';
    console.log(error);
  })
}

const updateDisplay = (arg) => {
  const toAppend = `<tr>
                      <td><img src='${arg.avatar}'></td>
                      <td><p>${arg.firstName}</p></td>
                      <td><p>${arg.lastName}</p></td>
                      <td><p>${arg.email}</p></td>
                      <td><p>${arg.title}</p></td>
                    </tr>` // initially had these in separate variables. Less code when done inline, but not sure if good practice.

  return tableBody.innerHTML = tableBody.innerHTML + toAppend;
}

input.addEventListener('change', (event) => {
  let searchTerm = `${url}${event.target.value}`;
  hash = event.target.value;
  window.location.hash = `#${hash}`;
  getData(searchTerm);
});

button.addEventListener('click', (event)=>{
  event.stopPropagation();
  input.value = '';
});

window.addEventListener('hashchange', (event) => {
  event.preventDefault();
  getData(`${url}${hash}`);
});

getData(`${url}${hash}`); //displays results on page load if hash is present.

const render = () => {
  const tableRows = document.querySelectorAll('tr');

  for(let i=0;i<tableRows.length;i++){
    if(i > 0) tableRows[i].innerHTML = ''; //empties rows that are > 0.
  }
  
  state.forEach((user)=>{
    updateDisplay(user);
  })
}







