import React, { createRef } from 'react';
import TileComponent from './Tile';
import { TileType } from '../model/tile.model';
import './Board.css';
import { crossword } from '../util/crossword';

const crosswordWithRefs = crossword.map((tile) => {
  if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
    tile.ref = createRef<HTMLInputElement>();
  }
  return tile;
});

const changeFocus = (index: number) => {
  if (index + 1 >= crosswordWithRefs.length) {
    return () => {};
  }
  return () => {
    const tile = crosswordWithRefs[index + 1];
    if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
      tile.ref?.current?.focus();
    }
  };
};
function Board() {
  return (
    <div className="board">
      {crosswordWithRefs.map((tile, index) => (
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
