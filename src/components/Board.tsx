import React, { createRef } from 'react';
import TileComponent from './Tile';
import { TileType, Tile } from '../model/tile.model';
import './Board.css';
import Checkbox from './Checkbox';
import Firebase from '../firebase';

type BoardState = {
  shouldFocusVertical: boolean;
  currentIndex: number;
  crossword: Tile[];
};

const normalize = (tile: Tile) => {
  if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
    tile.ref = createRef<HTMLInputElement>();
  }
  if (tile.type === TileType.HINT) {
    tile.text = Object.values(tile.text).map((val) => val);
  }
  return tile;
};

class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      shouldFocusVertical: false,
      currentIndex: 0,
      crossword: [],
    };
  }

  componentDidMount() {
    Firebase.setupChangeListener(this.boardUpdatedCallback);
  }

  boardUpdatedCallback = (snapshot: firebase.database.DataSnapshot) => {
    const board = snapshot.toJSON();
    if (board) {
      this.setState({
        crossword: Object.values(board).map(normalize),
      });
    }
  };

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
    const tile = this.state.crossword[this.state.currentIndex];

    if (tile.type === TileType.WRITEABLE || tile.type === TileType.RESULT) {
      tile.ref?.current?.focus();
    }
  };

  render() {
    return (
      <div>
        <div className="board">
          {this.state.crossword.map((tile, index) => (
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
