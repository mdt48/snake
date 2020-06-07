import React, { Component } from 'react';
import '../style/components/GameBoard.css'

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 10, 
            cols: 10,
            grid: [],
        };
    }
    createGrid() {
        for (var i = 0; i < this.state.rows; i++) {
            for (var j = 0; j < this.state.cols; j++) {
                this.state.grid.push({i, j});
            }
        }
    }

    render(){
        this.createGrid();
        const gridItems = this.state.grid.map((grid) => {
            return <div
                key={this.state.rows.toString() + "-" + this.state.cols.toString()}
                className="gridItem"></div>
        })
        return (
            <div className="board">
                <div className="grid">{gridItems}</div>
            </div>
        )
    }
}