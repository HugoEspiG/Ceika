import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_input.scss';

const Input = React.forwardRef(({ children, label, type, placeholder, classNameDiv, classNameInput, ...props }, ref) => {
  const classesDiv = classNames(classNameDiv);
  const classesInput = classNames('form-control', classNameInput)
  return (
    classNameInput == "" ?
      <div className={classesDiv}>
        <input
          type={type}
          placeholder={placeholder}
          className={classesInput}
          {...props}
          ref={ref} // Agregamos el ref aquí
        />
        {children}
        <label htmlFor="floatingInputGrid">{label}</label>
      </div>
      :
      <div className={classesDiv}>
        <label htmlFor="floatingInputGrid">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={classesInput}
          {...props}
          ref={ref} // Agregamos el ref aquí
        />
        {children}
      </div>
  );
});

export default Input;

