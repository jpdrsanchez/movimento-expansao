import InputMask from 'react-input-mask';

const PhoneInput = ({ type, id, label, setValue, ...props }) => {
  return (
    <InputMask
      type={type}
      id={id}
      name={id}
      aria-label={label}
      placeholder={label}
      onChange={({ target }) => setValue(target.value)}
      mask="(99) 99999-9999"
      maskChar=""
      {...props}
    />
  );
};

export default PhoneInput;
