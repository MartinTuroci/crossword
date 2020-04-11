import React from 'react';
import { TileType, TileProps } from '../model/tile.model';
import './Tile.css';
import WritableTile from './WritableTile';
import HintTile from './HintTile';

function getTile(props: TileProps) {
  switch (props.tile.type) {
    case TileType.WRITEABLE:
    case TileType.RESULT:
      return <WritableTile {...props} />;
    case TileType.HINT:
      return <HintTile {...props} />;
    default:
      throw new Error('Unsupported tile type.');
  }
}

function TileComponent(props: TileProps) {
  return <div className="tile">{getTile(props)}</div>;
}

export default TileComponent;
