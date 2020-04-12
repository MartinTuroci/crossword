import React, { ChangeEvent } from 'react';

type CheckboxProps = {
  label: string;
  onChangeListener: Function;
};

const Checkbox = ({ label, onChangeListener }: CheckboxProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeListener(e.target.checked);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider round"></span>
      </label>
      <div className="switch__text">{label}</div>
    </div>
  );
};
export default Checkbox;
