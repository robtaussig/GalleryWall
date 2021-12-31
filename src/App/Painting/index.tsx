import React, { FC, useState } from "react";
import "./styles.scss";
import cn from "classnames";
import { Painting as PaintingType } from '../model';
import InputField from "~App/InputField";

export interface PaintingProps {
  className?: string;
  painting: PaintingType;
  onEdit: (painting: PaintingType) => void;
  onDelete: () => void;
}

export const Painting: FC<PaintingProps> = ({ className, painting, onEdit, onDelete }) => {
  const [isSettingPreferredLocation, setIsSettingPreferredLocation] = useState(false);
  const { height, width, preferredPosition, color, frameColor } = painting;

  return <div className={cn("painting", className)}>
    <InputField
      className={'painting-input'}
      field={'Height'}
      type={'number'}
      value={height}
      onChange={height => onEdit({
        ...painting,
        height,
      })}
    />
    <InputField
      className={'painting-input'}
      field={'Width'}
      type={'number'}
      value={width}
      onChange={width => onEdit({
        ...painting,
        width,
      })}
    />
    <InputField
      className={'painting-input'}
      field={'Color'}
      type={'color'}
      value={color}
      onChange={color => onEdit({
        ...painting,
        color,
      })}
    />
    <InputField
      className={'painting-input'}
      field={'Frame Color'}
      type={'color'}
      value={frameColor}
      onChange={frameColor => onEdit({
        ...painting,
        frameColor,
      })}
    />
    <div className={'buttons'}>
      {!isSettingPreferredLocation && (<button onClick={() => setIsSettingPreferredLocation(true)}>Set preferred location</button>)}
      {isSettingPreferredLocation && <div>TBD<button onClick={() => setIsSettingPreferredLocation(false)}>Cancel</button></div>}
      <button onClick={onDelete}>Delete</button>
    </div>
  </div>;
};

export default Painting;
