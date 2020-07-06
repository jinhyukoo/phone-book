import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '최진혁',
        phone: '010-2061-3565'
      },
      {
        id: 1,
        name: '이은민',
        phone: '010-4737-3702'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
