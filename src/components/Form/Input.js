const Input = ({ type, id, label, setValue, ...props }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      aria-label={label}
      placeholder={label}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  );
};

export default Input;
