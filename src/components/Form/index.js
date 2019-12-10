import React from 'react';

import 'src/components/App/app.scss';

const Form = () => (
  <form className="form">
    <input
      type="email"
      placeholder="Adresse e-mail"
      name="email"
      className="form-input"
    />
    <input
      type="password"
      placeholder="Mot de passe"
      name="password"
      className="form-input"
    />
    <button type="submit" className="form-submit">Se connecter</button>
  </form>
);

export default Form;
