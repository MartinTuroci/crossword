import React, { ChangeEvent, useState, useEffect } from 'react';
import { TileProps } from '../model/tile.model';

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
      className={`tile__${tile.type}`}
      type="text"
      ref={tile.ref}
      value={text}
      onChange={handleInput}
      onClick={() => setText('')}
    />
  );
}

export default WritableTile;
