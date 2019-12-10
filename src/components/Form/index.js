import React from 'react';

import 'src/components/App/app.scss';

import Field from './field.js';

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

const Form = ({handleClick}) => (
  <div className="form-container">
    <form className="form">
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          handleClick={handleClick}
        />
      ))}
    </form>
    
    <button type="submit" className="form-submit">Se connecter</button>
  </div>

);

export default Form;
