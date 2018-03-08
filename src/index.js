import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
// import Increment from './hoc/Increment';
// import Label from './components/Label';

// import { BrowserRouter } from 'react-router-dom';
// import App from './components/App';
//
// const TestApp = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


// const EnhancedButton = Increment(Button);
// const EnhancedLabel = Increment(Label);

class Container extends Component {
    render() {
        return(
          <div>
              <Button />
          </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));
