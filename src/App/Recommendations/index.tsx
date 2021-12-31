import React, { FC } from 'react';
import './styles.scss';
import cn from 'classnames';
import { Recommendation } from '~App/model';

export interface RecommendationsProps {
  className?: string;
  recommendations: Recommendation[];
}

export const Recommendations: FC<RecommendationsProps> = ({
  className,
  recommendations,
}) => {

  return (
    <div className={cn('recommendations', className)}>
      <h2>Recommendations</h2>
      TBD
    </div>
  );
};

export default Recommendations
