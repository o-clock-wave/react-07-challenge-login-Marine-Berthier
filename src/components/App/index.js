import React from 'react';

import './app.scss';
import Intro from 'src/components/Intro';
import Form from 'src/components/Form';
import Password from 'src/components/Password';

const fields = [
  {
    name: 'email',
    placeholder: 'Adresse Email',
    type: 'email',
    click: false,
  },
  {
    name: 'password',
    placeholder: 'Mot de passe',
    type: 'password',
    click: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields,
      password: '',
      email: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { fields } = this.state;
    const newFields = fields.map((field) => {
      if (field.name === name) {
        return {
          ...field,
          click: !field.click,
        };
      }
      return field;
    });

    // Modification du state
    this.setState({
      fields: newFields,
    });

    console.log(fields);
  }


  render() {
    return (
      <main className="app">
        <Intro />
        <Form handleClick={this.handleClick} />
        <Password />
      </main>
    );
  }
}

export default App;
