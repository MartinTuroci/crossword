export enum TileType {
  HINT = 'hint',
  WRITEABLE = 'writable',
}

export interface Tile {
  text: string;
  type: TileType;
  ref?: React.RefObject<HTMLInputElement>;
}
