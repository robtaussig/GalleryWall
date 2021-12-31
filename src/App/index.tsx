import React, { useReducer } from 'react';
import reducer, {
  INITIAL_STATE,
  addPainting,
  removePainting,
  updatePainting,
  updateWall,
  updateOption,
} from './state';
import Wall from './Wall';
import './styles.scss';
import Recommendations from './Recommendations';
import Options from './Options';
import Paintings from './Paintings';

export const App = () => {
  const [{
    paintings,
    wall,
    recommendations,
    options,
  }, dispatch] = useReducer(reducer, INITIAL_STATE);

  const generateRecommendations = () => {
    alert('TBD');
  };

  return (
    <div className={'app'}>
      <Paintings
        paintings={paintings}
        onAdd={() => dispatch(addPainting())}
        onEdit={newPainting => dispatch(updatePainting(newPainting))}
        onDelete={paintingId => dispatch(removePainting(paintingId))}
      />
      <Wall
        wall={wall}
        onEdit={wall => dispatch(updateWall(wall))}
      />
      <Options
        options={options}
        onEdit={newOptions => dispatch(updateOption(newOptions))}
      />
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      <Recommendations recommendations={recommendations}/>
    </div>
  );
};

export default App;
