import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ type, children, className, disabled }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired
}

export default Button
