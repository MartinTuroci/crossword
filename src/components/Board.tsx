import React, { createRef } from 'react';
import TileComponent from './Tile';
import { TileType } from '../model/tile.model';
import './Board.css';
import { crossword } from '../util/crossword';
import Checkbox from './Checkbox';

type BoardState = {
  shouldFocusVertical: boolean;
  currentIndex: number;
};
class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      shouldFocusVertical: false,
      currentIndex: -1,
    };
  }

  static crosswordWithRefs = crossword.map((tile) => {
    if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
      tile.ref = createRef<HTMLInputElement>();
    }
    return tile;
  });

  changeFocusVertical = (shouldFocusVertical: boolean) => {
    this.setState({ shouldFocusVertical });
    this.focusCurrentTile();
  };

  setCurrentIndex = (currentIndex: number, withOffset = true) => {
    let offset = 0;

    if (withOffset) {
      offset = this.state.shouldFocusVertical ? 14 : 1;
    }

    this.setState({ currentIndex: currentIndex + offset }, () =>
      this.focusCurrentTile(),
    );
  };

  focusCurrentTile = () => {
    const tile = Board.crosswordWithRefs[this.state.currentIndex];

    if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
      tile.ref?.current?.focus();
    }
  };

  render() {
    return (
      <div>
        <div className="board">
          {Board.crosswordWithRefs.map((tile, index) => (
            <TileComponent
              key={index}
              tile={tile}
              index={index}
              setCurrentIndex={this.setCurrentIndex}
            />
          ))}
        </div>
        <div className="controls">
          <Checkbox
            label="Vertikálne"
            onChangeListener={this.changeFocusVertical}
          />
        </div>
      </div>
    );
  }
}

export default Board;
