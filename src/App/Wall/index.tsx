import React, { FC } from "react";
import "./styles.scss";
import cn from "classnames";
import { Wall as WallType } from "../model";
import InputField from "~App/InputField";

export interface WallProps {
  className?: string;
  wall: WallType;
  onEdit: (wall: WallType) => void;
}

export const Wall: FC<WallProps> = ({
  className,
  wall,
  onEdit,
}) => {
  const { isEditing, height, width, color } = wall;

  return (
    <div className={cn("wall", className)}>
      <h2>
        Wall
      </h2>
      <form>
        <InputField className={'wall-input'} field={'Height'} type={'number'} value={height} onChange={height => onEdit({
          ...wall,
          height,
        })}/>
        <InputField className={'wall-input'} field={'Width'} type={'number'} value={width} onChange={width => onEdit({
          ...wall,
          width,
        })}/>
        <InputField className={'wall-input'} field={'Color'} type={'color'} value={color} onChange={color => onEdit({
          ...wall,
          color,
        })}/>
      </form>
    </div>
  );
};

export default Wall;
