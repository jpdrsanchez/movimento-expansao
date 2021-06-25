import InputMask from 'react-input-mask';

const PhoneInput = ({ type, id, label, setValue, onBlur, error, ...props }) => {
  return (
    <InputMask
      type={type}
      id={id}
      name={id}
      aria-label={label}
      placeholder={error ? error : label}
      onChange={({ target }) => setValue(target.value)}
      onBlur={onBlur}
      className={error && 'error'}
      mask="(99) 99999-9999"
      maskChar=""
      {...props}
    />
  );
};

export default PhoneInput;
