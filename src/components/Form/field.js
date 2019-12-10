import React from 'react';
import classNames from 'classnames';

import 'src/components/App/app.scss';

const Field = ({
  type, name, placeholder, handleClick, click,
}) => {
  const className = classNames('form-input', { 'form-input--click': click });

  return (
    <div className="field">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        onClick={() => handleClick(name)}
      />
    </div>
  );
};
export default Field;
