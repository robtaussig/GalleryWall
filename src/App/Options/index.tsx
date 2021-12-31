import React, { FC } from 'react';
import './styles.scss';
import cn from 'classnames';
import { Options as OptionsType } from '~App/model';
import InputField from '~App/InputField';

export interface OptionsProps {
  className?: string;
  onEdit: (options: OptionsType) => void;
  options: OptionsType;
}

export const Options: FC<OptionsProps> = ({
  className,
  onEdit,
  options,
}) => {
  const { minMargin, maxMargin, preferEvenMargin, preferGrid, requireUseAll } = options;

  return (
    <div className={cn('options', className)}>
      <h2>Options</h2>
      <InputField
        field={'Min Margin'}
        type={'number'}
        value={minMargin}
        onChange={minMargin => onEdit({
          ...options,
          minMargin,
        })}
      />
      <InputField
        field={'Max Margin'}
        type={'number'}
        value={maxMargin}
        onChange={maxMargin => onEdit({
          ...options,
          maxMargin,
        })}
      />
      <InputField
        field={'Prefer Even Margin'}
        type={'boolean'}
        value={preferEvenMargin}
        onChange={preferEvenMargin => onEdit({
          ...options,
          preferEvenMargin,
        })}
      />
      <InputField
        field={'Prefer Grid'}
        type={'boolean'}
        value={preferGrid}
        onChange={preferGrid => onEdit({
          ...options,
          preferGrid,
        })}
      />
      <InputField
        field={'Use All'}
        type={'boolean'}
        value={requireUseAll}
        onChange={requireUseAll => onEdit({
          ...options,
          requireUseAll,
        })}
      />
    </div>
  );
};

export default Options
