import React, { Component } from 'react';
import withUser from '../../hoc/withUser';

class Basic extends Component {
    renderUsers = () => {
        const { users } = this.props;

        return users.map((user) => {
            return (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Address: {user.address}</p>
                    <p>Card Number: {user.cardNo}</p>
                    <p>CVC: {user.cardExp}</p>
                </div>
            );
        });
    }
    render() {
        return(
            <div>
                <h1>Users</h1>
                { this.renderUsers() }
            </div>
        );
    }
}

export default withUser(Basic);
