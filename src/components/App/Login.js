/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';


const Login = ({
  onChangeView,
  onChangeInput,
  submit,
  emailValue,
  passwordValue,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    submit();
  };

  return (
    <>
      <h1 className="app-title">Connexion</h1>
      <p className="app-desc">Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte</p>
      <form className="form" onSubmit={handleSubmit}>
        <Field
          value={emailValue}
          name="email"
          placeholder="Votre Email"
          onInputChange={onChangeInput}
        />
        <Field
          value={passwordValue}
          name="password"
          placeholder="Votre mot de passe"
          type="password"
          onInputChange={onChangeInput}
        />
        <button type="submit" className="form-submit form-submit--login">Se connecter</button>
      </form>
      <a className="app-link" onClick={() => onChangeView('password')}>Mot de passe oublié ?</a>
    </>
  );
};
Login.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Login;
