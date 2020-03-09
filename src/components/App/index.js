/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

// Styles
import './app.scss';
// Composants
import Login from './Login';
import ForgottenPassword from './ForgottenPassword';


class App extends React.Component {
  state = {
    currentView: 'login',
    email: '',
    password: '',
  };


  changeView = (newView) => {
    // Modification de la valeur de la vue courrante
    this.setState({
      currentView: newView,
    });
  }

  changeInput = (value, name) => {
    // modif du state à partir des données recues
    this.setState({
      [name]: value,
    });
  }

  login = () => {
    const { email, password } = this.state;
    this.setState({
      currentView: 'loading',
    });
    axios.post('http://localhost:3001/login',
    // on fournit des paramètres
      {
        email,
        password,
      })
      .then((response) => {
        console.log('esponse');
        this.setState({
          firstname: response.data,
          currentView: 'welcome',
        });
      })
      .catch((error) => {
        alert('error');
      })
      .finally(() => {
        // always executed
        this.setState({
          currentView: 'login',
        });
      });

    console.log('coucou');
  }


  render() {
    const {
      currentView, email, password, firstname,
    } = this.state;

    return (
      <div className="app">
        {currentView === 'loading' && (
          <div> Chargement en cours...</div>
        )}

        {currentView !== 'loading' && (
          <>
            {currentView === 'login' && (
            <Login
              onChangeView={this.changeView}
              onChangeInput={this.changeInput}
              submit={this.login}
              emailValue={email}
              passwordValue={password}
            />
            )}
            {currentView === 'password' && (
            <ForgottenPassword
              onChangeView={this.changeView}
              onChangeInput={this.changeInput}
              emailValue={email}
            />
            )}
            {currentView === 'welcome' && (
              <>
                <h1>Bienvenue {firstname}</h1>
              </>
            )}
          </>
        )}

      </div>
    );
  }
}


export default App;
