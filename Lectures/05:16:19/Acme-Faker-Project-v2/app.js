const app = document.querySelector('#app');

class HeaderContainer extends React.Component {
    render() {
        return React.createElement(
            'h1',
            { style: { fontWeight: 'bold' } },
            'Acme Faker Favorites'
        )
    }
}

class UsersSelected extends React.Component {
    render() {
        const {usersSelectedCount} = this.props;

        return React.createElement(
            'h2',
            { style: {textDecoration: 'underline'} },
            `You have ${usersSelectedCount} favorite users!`
        )
    }
}

class UsersContainer extends React.Component {

    render() {
        const {users} = this.props;
        const {countUsers} = this.props;

        const selectUser = (event) => {
            users[event.target.id]['selected'] = !users[event.target.id]['selected']; // adds selected property to user
            users[event.target.id]['selected'] ? event.target.classList.add('selected') : event.target.classList.remove('selected');
            countUsers(); // updates the count of selected users, by finding the length of .filter()
            console.log(users);
        }

        const usersMap = users.map((user, idx) => {
            return React.createElement(
                'li', 
                {class: 'user-container', onClick: selectUser, id: idx}, 
                React.createElement('p', {}, user.name),
                React.createElement('p', {}, user.username)    
            );
        });

        return React.createElement('ul', null, usersMap);
    }
}

class Container extends React.Component {
    createUsers = (num) => { // createUsers() must be initialized before state, or else state can't call the function.
        let users = [];
        for(let i=0; i<num; i++){
            users.push(faker.helpers.createCard());
        }
        return users;
    }

    state = {
        users: this.createUsers(20), // call this.createUsers() inside state. If inside render, it will keep adding 20 new users on re-render.
        usersSelectedCount: 0
    }


    countUsers = () => {
        const {users} = this.state;
        let {usersSelectedCount} = this.state;

        usersSelectedCount = users.filter((user) => { // use .filter() to count how many users have selected === true;
            return user.selected;
        }).length

        this.setState({
            usersSelectedCount
        })
    }

    render() {   
        const {users} = this.state;
        const {usersSelectedCount} = this.state;

        return React.createElement(
            'div',
            { class: 'container' },
            React.createElement(HeaderContainer),
            React.createElement(UsersSelected, {usersSelectedCount}),
            React.createElement(UsersContainer, {users, countUsers: this.countUsers})
        )
    }

}

ReactDOM.render(React.createElement(Container), app, () => {console.log('rendered')});