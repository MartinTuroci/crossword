export enum TileType {
  HINT = 'hint',
  WRITEABLE = 'writable',
  RESULT = 'result',
}

export interface Tile {
  text: string;
  type: TileType;
  ref?: React.RefObject<HTMLInputElement>;
}

export type TileProps = {
  tile: Tile;
  changeFocus: Function;
};
