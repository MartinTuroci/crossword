import React from 'react';
import { TileProps } from '../model/tile.model';

function HintTile({ tile }: TileProps) {
  if (!Array.isArray(tile.text) || tile.text.length > 2)
    throw new Error('Hint text has to be array with maximum of 2 strings');

  const multipleClass = tile.text.length === 2 ? 'tile_hint--multiple' : '';
  return (
    <>
      {tile.text.map((text: string, index: number) => (
        <div key={index} className={`tile__hint ${multipleClass}`}>
          {text}
        </div>
      ))}
    </>
  );
}

export default HintTile;
