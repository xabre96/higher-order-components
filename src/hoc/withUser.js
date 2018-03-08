import React, { Component } from 'react';

const withUser = (WrappedComponent) => {
    return class extends Component {
        render () {
            const newProps = {
                users: [{
                    name: 'Xan Gutierrez',
                    address: 'Benoni, Mahinog, Camiguin',
                    cardNo: 123456789,
                    cardExp: 1234,
                }]
            };
        
            return (<WrappedComponent {...newProps} {...this.props} />);
        }
    }
}

export default withUser;
