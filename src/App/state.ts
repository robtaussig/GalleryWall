import { Actions, ActionTypes, AddPaintingAction, Options, Painting, RemovePaintingAction, State, UpdateOptionAction, UpdatePaintingAction, UpdateWallAction, Wall } from "./model";
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

const INITIAL_STARTING_PAINTINGS = 3;

const newPainting = (): Painting => ({
  id: uuidv4(),
  height: 10,
  width: 10,
  includesFrame: true,
});

export const INITIAL_STATE: State = {
  paintings: new Array(INITIAL_STARTING_PAINTINGS).fill(null).map(newPainting),
  wall: {
    height: 100,
    width: 100,
    color: '#fff',
    isEditing: false,
  },
  recommendations: [],
  options: {
    minMargin: 2,
    maxMargin: 5,
    preferEvenMargin: false,
    preferGrid: true,
    requireUseAll: true,
  },
};

export const addPainting = (): AddPaintingAction => ({
  type: ActionTypes.AddPainting,
});

export const removePainting = (id: string): RemovePaintingAction => ({
  type: ActionTypes.RemovePainting,
  payload: id,
});

export const updatePainting = (painting: Painting): UpdatePaintingAction => ({
  type: ActionTypes.UpdatePainting,
  payload: painting,
});

export const updateWall = (wall: Wall): UpdateWallAction => ({
  type: ActionTypes.UpdateWall,
  payload: wall,
});

export const updateOption = (option: Partial<Options>): UpdateOptionAction => ({
  type: ActionTypes.UpdateOption,
  payload: option,
});

const reducer = (state: State, action: Actions) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.AddPainting:
      return produce(state, draftState => {
        draftState.paintings.push(newPainting());
      });
    case ActionTypes.RemovePainting:
      return produce(state, draftState => {
        draftState.paintings = draftState.paintings.filter(painting => painting.id !== action.payload);
      });
    case ActionTypes.UpdatePainting:
      return produce(state, draftState => {
        draftState.paintings = draftState.paintings.map(painting => {
          if (painting.id === action.payload.id) return action.payload;
          return painting;
        });
      });
    case ActionTypes.UpdateWall:
      return produce(state, draftState => {
        draftState.wall = action.payload;
      });
    case ActionTypes.UpdateOption:
      return produce(state, draftState => {
        draftState.options = { ...draftState.options, ...action.payload };
      });
    default:
      return state;
  }
};

export default reducer;
