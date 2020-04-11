import React, { ChangeEvent, useState, useEffect } from 'react';
import { Tile, TileType } from '../model/tile.model';
import './Tile.css';

type TileProps = {
  tile: Tile;
  changeFocus: Function;
};

function getTile(props: TileProps) {
  switch (props.tile.type) {
    case TileType.WRITEABLE:
      return <WritableTile {...props} />;
    case TileType.HINT:
      return <HintTile {...props} />;
    default:
      throw new Error('Unsupported tile type.');
  }
}

function WritableTile({ tile, changeFocus }: TileProps) {
  const [text, setText] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    changeFocus();
  };

  useEffect(() => {
    setText(text.slice(-1));
  }, [text]);

  return (
    <input
      type="text"
      ref={tile.ref}
      value={text}
      onChange={handleInput}
      onClick={() => setText('')}
    />
  );
}
function HintTile({ tile }: TileProps) {
  return <span className="tile__hint">{tile.text}</span>;
}

function TileComponent(props: TileProps) {
  return <div className="tile">{getTile(props)}</div>;
}

export default TileComponent;
