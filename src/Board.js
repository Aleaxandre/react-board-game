import React from 'react';
import Square from './Square'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            status: 'X'
        };
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />
        );
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(!squares[i]) {
            squares[i] = this.state.status;
            this.setState({ squares: squares });
            this.setState({ status: this.state.status === 'X' ? 'O' : 'X' });
        } else {
            alert('Case déjà prise.');
        }
    }

    render() {
        const status = `Next player: ${this.state.status}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;