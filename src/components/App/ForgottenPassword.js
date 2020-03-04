import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

const ForgottenPassword = ({ onChangeView, onChangeInput, emailValue }) => (
  <>
    <a
      className="app-link app-link--back"
      onClick={() => onChangeView('login')}
    >
      Annuler
    </a>
    <h1 className="app-title">Mot de passe oublié</h1>
    <p className="app-desc">Renseignez votre adresse e-mail et nous vous enverrons un nouveau mot de passe tout beau tout neuf</p>
    <form className="form">
      <Field
        value={emailValue}
        name="email"
        placeholder="Votre Email"
        onInputChange={onChangeInput}
      />
      <button type="submit" className="form-submit">Regénérer mot de passe</button>
    </form>
  </>
);

ForgottenPassword.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
};

export default ForgottenPassword;