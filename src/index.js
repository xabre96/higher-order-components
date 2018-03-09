import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Label from './components/Label';
import Increment from './hoc/Increment';
import './styles.css';

const EnhancedButton = Increment(Button);
const EnhancedLabel = Increment(Label);

class Container extends Component {
    render() {
        return(
          <div className='button' style={{marginLeft: '600px', marginTop: '200px'}}>
            <div>
              <EnhancedButton />
            </div>
            <br/>
            <div>
              <EnhancedLabel />
            </div>
          </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));
