export enum TileType {
  HINT = 'hint',
  WRITEABLE = 'writable',
  RESULT = 'result',
}

export interface Tile {
  text: string | string[];
  type: TileType;
  ref?: React.RefObject<HTMLInputElement>;
}

// interface WriteableTile {
//   text: string;
//   type: TileType.WRITEABLE;
//   ref: React.RefObject<HTMLInputElement>;
// }

// interface HintTile {
//   text: string[];
//   type: TileType.HINT;
// }

export type TileProps = {
  tile: Tile;
  changeFocus: Function;
};
