import React, { ChangeEvent } from 'react';
import { TileProps } from '../model/tile.model';
import Firebase from '../firebase';

type WritableTileState = {
  text: string | string[];
};

class WritableTile extends React.Component<TileProps, WritableTileState> {
  constructor(props: TileProps) {
    super(props);
    this.state = {
      text: props.tile.text,
    };
  }

  componentDidUpdate({ tile }: TileProps) {
    if (this.props.tile.text !== tile.text) {
      this.setState({ text: this.props.tile.text });
    }
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.slice(-1);
    this.setState({ text });
    this.props.setCurrentIndex(this.props.index);
    Firebase.write(this.props.index, event.target.value.slice(-1));
  };

  handleClick = () => {
    this.setState({
      text: '',
    });
    this.props.setCurrentIndex(this.props.index, false);
  };

  render() {
    return (
      <input
        className={`tile__${this.props.tile.type}`}
        type="text"
        ref={this.props.tile.ref}
        value={this.state.text}
        onChange={this.handleInput}
        onClick={this.handleClick}
      />
    );
  }
}
export default WritableTile;
