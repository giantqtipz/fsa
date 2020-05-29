const app = document.querySelector('#app');

class UsersContainer extends React.Component {
    render(){
        let children = [];

        const {users, count, selected} = this.props;

        users.forEach((user, idx) => {
            children.push(React.createElement('div', {key: user.username, id: idx, onClick: selected}, `${user.name}`));
        })

        const favorites = React.createElement('div', {className: 'favorite', textDecoration: 'underline'}, `You have ${count} favorite users!`);

        return React.createElement(
            'div',
            {id: 'usersContainer'}, 
            children
        )
    }
}

class HeaderContainer extends React.Component {
    
    render(){
        return React.createElement('h1', {}, 'Acme Faker Favorites');
    }

}

class ClassContainer extends React.Component {
    state = {
        userCounter: 0,
        count: 0,
        users: []
    }

    createUsers = (numOfUsers) => {
        for(let i=0;i<numOfUsers;i++){
            let user = faker.helpers.createCard();
            user.class = 'not-selected';
            this.state.users.push(user);
        }
    }

    selected = () => {
        // const {count} = this.state;
        // // console.log(id);
        let prevState = [...this.state.users];
        // let user = {...usersIn[event.target.id]}
        // user.class = 'selected';
        // usersIn[event.target.id] = user;
        // let counter = 0;
        
        // usersIn.forEach((user) => {
        //     if(user.class === 'selected') {
        //         counter++;
        //     }
        // })

        // // users.forEach((user) => {
        // //     if(user.userName === event.target.id){
        // //         // user.class = 'selected';
        // //         this.setState = () => {
        // //             user.class = 'selected'; 
        // //         }
        // //     }
        // // })
        // // user.classList.add('selected');

        console.log(prevState);
        this.setState(
            prevState => ({
                users: {
                    ...prevState.users,
                    [prevState.users[event.target.id].class]: 'selected'
                }
            })
        )
        
        console.log(this.state);
        console.log(event.target.id);
        // console.log(usersIn);
    }

    render(){
        this.createUsers(20);
        const {users} = this.state;
        const {count} = this.state;

        return React.createElement('div', {id: 'container'}, React.createElement(HeaderContainer), React.createElement(UsersContainer, {users, count, selected: this.selected}));
    }

}

ReactDOM.render(React.createElement(ClassContainer), app, ()=>{console.log('i rendered')});