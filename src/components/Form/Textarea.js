const Textarea = ({ id, label, setValue, onBlur, error, ...props }) => {
  return (
    <textarea
      id={id}
      name={id}
      aria-label={label}
      placeholder={error ? error : label}
      onChange={({ target }) => setValue(target.value)}
      onBlur={onBlur}
      className={error && 'error'}
      {...props}
    />
  );
};

export default Textarea;
