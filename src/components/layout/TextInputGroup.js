import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        // className="from-control form-control lg"
        className={classnames("from-control form-control lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

// defining default prop for TextInputGroup component
TextInputGroup.defaultProps = {
  type: "text",
};

// type checking for props
TextInputGroup.protoTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextInputGroup;
