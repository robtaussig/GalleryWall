export type Position = {
  x: number;
  y: number;
};

export type Painting = PaintingWithFrame | PaintingWithoutFrame;

type BasePainting = {
  id: string;
  height: number;
  width: number;
  preferredPosition?: Position;
  color?: string;
  frameColor?: string;
};

export type PaintingWithFrame = BasePainting & {
  includesFrame: true;
  maxFrame?: never;
}

export type PaintingWithoutFrame = BasePainting & {
  includesFrame: false;
  maxFrame: number;
}

export type Wall = {
  height: number;
  width: number;
  color: string;
  isEditing: boolean;
};

export type Recommendation = (Painting & Position)[];

export type Options = {
  minMargin: number;
  maxMargin: number;
  preferEvenMargin: boolean;
  preferGrid: boolean;
  requireUseAll: boolean;
}

export interface State {
  paintings: Painting[];
  wall: Wall;
  recommendations: Recommendation[];
  options: Options;
}

export enum ActionTypes {
  AddPainting = 'AddPainting',
  RemovePainting = 'RemovePainting',
  UpdatePainting = 'UpdatePainting',
  UpdateWall = 'UpdateWall',
  UpdateOption = 'UpdateOption',
}

export type AddPaintingAction = {
  type: ActionTypes.AddPainting,
}

export type RemovePaintingAction = {
  type: ActionTypes.RemovePainting,
  payload: string,
}

export type UpdatePaintingAction = {
  type: ActionTypes.UpdatePainting,
  payload: Painting,
}

export type UpdateWallAction = {
  type: ActionTypes.UpdateWall,
  payload: Wall,
}

export type UpdateOptionAction = {
  type: ActionTypes.UpdateOption,
  payload: Partial<Options>,
}

export type Actions = AddPaintingAction
  | RemovePaintingAction
  | UpdatePaintingAction
  | UpdateWallAction
  | UpdateOptionAction;
