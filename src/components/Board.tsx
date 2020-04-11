import React, { createRef } from 'react';
import TileComponent from './Tile';
import { TileType, Tile } from '../model/tile.model';
import './Board.css';

const dummyBoard: Tile[] = [
  {
    text: 'Nejaka moja napoveda',
    type: TileType.HINT,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: 'Napoveda',
    type: TileType.HINT,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
  {
    text: '',
    type: TileType.WRITEABLE,
  },
];

const boardWithRefs = dummyBoard.map((tile) => {
  if (tile.type === TileType.WRITEABLE) {
    tile.ref = createRef<HTMLInputElement>();
  }
  return tile;
});

const changeFocus = (index: number) => {
  if (index + 1 >= boardWithRefs.length) {
    return () => {};
  }
  return () => {
    const tile = boardWithRefs[index + 1];
    if (tile.type === TileType.WRITEABLE) {
      tile.ref?.current?.focus();
    }
  };
};
function Board() {
  return (
    <div className="board">
      {boardWithRefs.map((tile, index) => (
        <TileComponent
          key={index}
          tile={tile}
          changeFocus={changeFocus(index)}
        />
      ))}
    </div>
  );
}

export default Board;
