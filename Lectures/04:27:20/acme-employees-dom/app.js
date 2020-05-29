const app = document.querySelector('#app');

const createHeader = () => {
    const headerContainer = document.createElement('div');
    const header = document.createElement('h1');
    header.innerText = 'Acme Employees DOM';

    headerContainer.appendChild(header);
    app.appendChild(header);

    return headerContainer;
}

const subHeader = () => {
    const subHeaderContainer = document.createElement('div');
    const subHeader = document.createElement('h2');
    subHeader.innerText = 'Acme Employees DOM';

    subHeaderContainer.appendChild(subHeader);
    app.appendChild(subHeaderContainer);

    return subHeaderContainer;
}

const mainContent = () => {
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');

    app.appendChild(boxContainer);
    return boxContainer;
}

const boxMaker = (name, id) => {
    const box = document.createElement('div');
    box.classList.add('box');

    let fav = false;

    const text = document.createElement('span');
    text.classList.add('name');

    text.innerText = name;
    box.appendChild(text);
    
    box.addEventListener('click', function(){
        favorite(this);
    });

    return box;
}

let counter = 0;
const favorite = (arg) =>{
    
    const counterCheck = () =>{
        if(counter === 3){
            alert("only 3 favorites allowed");
        } else if (counter < 3){
            if(arg.classList.contains('favorite')){
                counter--;
                arg.classList.remove('favorite');
                alert(counter);
            } else {
                counter++;
                arg.classList.add('favorite');
                alert(counter);
            }
        } 
    }
    return counterCheck();
}

const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const state = {
    employees,
    counter: 0
}

  const render = () => {
    app.innerHTML = '';

    createHeader();
    subHeader();
    mainContent();

    for(let i=0;i<state.employees.length;i++){
        let employee = state.employees[i];
        mainContent().appendChild(boxMaker(employee.name, employee.id));
    }

  }

  render();