import React from 'react';
import classNames from 'classnames';

const PItem = ({ children, variant, color, className, ...rest }) => {
  const classes = classNames(
    `${variant}`,
    `text-${color}`,
    className
  );
  return (
    <p className={classes} {...rest}>
      {children}    
    </p>
  );
};

export default PItem;