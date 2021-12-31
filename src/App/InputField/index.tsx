import React, { FC } from 'react';
import './styles.scss';
import cn from 'classnames';

type BaseInputFieldProps<T extends string | number | boolean, V> = {
  className?: string;
  field: string;
  type: V;
  value: T;
  onChange: (value: T) => void;
}

type NumberInputFieldProps = BaseInputFieldProps<number, 'number'>;

type CheckBoxInputFieldProps = BaseInputFieldProps<boolean, 'boolean'>;

type StringInputFieldProps = BaseInputFieldProps<string, 'text' | 'date' | 'color' | 'email'>;

export type InputFieldProps = NumberInputFieldProps | StringInputFieldProps | CheckBoxInputFieldProps;

export const InputField: FC<InputFieldProps> = ({
  className,
  type,
  field,
  value,
  onChange,
}) => {
  return (
    <div className={cn('input-field', className)}>
      <label htmlFor={field}>{field}</label>
      {type === 'number' ? (
        //@ts-ignore
        <input id={field} type={type} value={value} onChange={e => onChange(Number(e.target.value))}/>
      ) : type === 'boolean' ? (
        //@ts-ignore
        <input id={field} type={'checkbox'} value={value} onChange={e => onChange(Boolean(e.target.checked))}/>
      ) : (
        //@ts-ignore
        <input id={field} type={type} value={value} onChange={e => onChange(e.target.value)}/>
      )}
    </div>
  );
};

export default InputField
