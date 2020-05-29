const avatarDiv = document.querySelector('.avatar-list');
const firstDiv = document.querySelector(".first-list");
const lastDiv = document.querySelector(".last-list");
const emailDiv = document.querySelector(".email-list");
const titleDiv = document.querySelector(".title-list");  

// const content = document.querySelector('.content');

const input = document.querySelector('input');
const error = document.querySelector('.error');
const button = document.querySelector('button');

let state = [];

input.addEventListener('change', (event) => {
  let searchTerm = `https://acme-users-api-rev.herokuapp.com/api/users/search/${event.target.value}`;
  getData(searchTerm);
});

const getData = function(val){
  axios.get(val)
  .then(function (response) {
    let users = response.data.users;
    state = users;
    render();
  })
  .catch(function (error) {
    error.innerText = 'Name does not exist, please try another.';
    console.log(error);
  })
}

const updateDisplay = (arg) => {

  let avatar = arg.avatar;
  let firstName = arg.firstName;
  let lastName = arg.lastName;
  let email = arg.email;
  let title = arg.title;

  const createContainer = document.createElement('div');
  const createAvatar = document.createElement('img');
  const createFirstName = document.createElement('p');
  const createLastName = document.createElement('p');
  const createEmail = document.createElement('p');
  const createTitle = document.createElement('p');
  
  createContainer.classList.add('user-card');

  createAvatar.src = avatar;
  createFirstName.innerText = firstName;
  createLastName.innerText = lastName;
  createEmail.innerText = email;
  createTitle.innerText = title;

  // content.append(createContainer);
  avatarDiv.append(createAvatar);
  firstDiv.append(createFirstName);
  lastDiv.append(createLastName);
  emailDiv.append(createEmail);
  titleDiv.append(createTitle);

  // createContainer.append(createAvatar);
  // createContainer.append(createFirstName);
  // createContainer.append(createLastName);
  // createContainer.append(createEmail);
  // createContainer.append(createTitle);
}

const render = () => {
  avatarDiv.innerHTML = '';
  firstDiv.innerHTML = '';
  lastDiv.innerHTML = '';
  emailDiv.innerHTML = '';
  titleDiv.innerHTML = '';

  // content.innerHTML = '';

  state.forEach((user)=>{
    console.log(user);
    updateDisplay(user);
  })
}

button.addEventListener('click', (event)=>{
  event.stopPropagation();
  avatarDiv.innerHTML = '';
  firstDiv.innerHTML = '';
  lastDiv.innerHTML = '';
  emailDiv.innerHTML = '';
  titleDiv.innerHTML = '';
  // content.innerHTML = '';
  input.value = '';
});





