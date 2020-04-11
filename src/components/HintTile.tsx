import React from 'react';
import { TileProps } from '../model/tile.model';

function HintTile({ tile }: TileProps) {
  return <span className="tile__hint">{tile.text}</span>;
}

export default HintTile;
