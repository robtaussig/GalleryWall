import React, { FC } from 'react';
import './styles.scss';
import cn from 'classnames';
import { Painting as PaintingType } from '~App/model';
import Painting from '~App/Painting';

export interface PaintingsProps {
  className?: string;
  paintings: PaintingType[];
  onAdd: () => void;
  onEdit: (painting: PaintingType) => void;
  onDelete: (id: string) => void;
}

export const Paintings: FC<PaintingsProps> = ({
  className,
  paintings,
  onAdd,
  onEdit,
  onDelete,
}) => {

  return (
    <div className={cn('paintings', className)}>
      <h2>Paintings<button onClick={onAdd}>+</button></h2>
      <ul>
        {paintings.map(painting => (
          <Painting
            key={painting.id}
            painting={painting}
            onDelete={() => onDelete(painting.id)}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Paintings
