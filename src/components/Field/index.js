// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onInputChange,
}) => {
  const handleChange = (evt) => {
    // Récup les infos du champ (name, value)
    // recup d'info depuis l'event
    const newValue = evt.target.value;
    // Éxécution de la fonction venant de App avec les data utiles
    onInputChange(newValue, name);
  };

  const inputId = `field-${name}`;

  const cssClassNames = classNames(
    'field',
    {
      'field--has-content': value.length > 0,
    },
  );

  return (
    <div className={cssClassNames}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;