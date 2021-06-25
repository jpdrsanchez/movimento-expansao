const Textarea = ({ id, label, setValue, ...props }) => {
  return (
    <textarea
      id={id}
      name={id}
      aria-label={label}
      placeholder={label}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  );
};

export default Textarea;
