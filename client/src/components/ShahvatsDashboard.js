import React, {Component} from 'react';
import '../styles/dashboard.css'

const whiteKing = require('../images/white-king.png');
const whiteQueen = require('../images/white-queen.png');
const whiteOfficer = require('../images/white-officer.png');
const whiteHorse = require('../images/white-horse.png');
const whiteElephant = require('../images/white-elephant.png');
const whitePawn = require('../images/white-pawn.png');

const blackKing = require('../images/black-king.png');
const blackQueen = require('../images/black-queen.png');
const blackOfficer = require('../images/black-officer.png');
const blackHorse = require('../images/black-horse.png');
const blackElephant = require('../images/black-elephant.png');
const blackPawn = require('../images/black-pawn.png');

class ShahvatsDashboard extends Component {

  clickField = (event) => {
    event.target.classList.toggle('active-square')
    console.log(event.target);
  };

  showField = (element) => {
    let result = [];
    for (let i = 0; i < 64; i = i + 8) {
      let row = [];
      for (let j = i; j < i + 8; j++) {
        if (element[j].value) {
          row.push(
            <div key={element[j].address} id={element[j].address} className={element[j].color}
                 onClick={this.clickField}>
              <img src={element[j].value}/>
            </div>)
        } else {
          row.push(
            <div key={element[j].address} id={element[j].address} className={element[j].color}
                 onClick={this.clickField}>
            </div>)
        }
      }
      result.push(
        <div key={i} className='row'>
          {row}
        </div>
      )
    }
    return result;
  };


  render() {
    let position = [
      {address: 'a8', value: blackElephant, color: 'white-field'},
      {address: 'b1', value: blackHorse, color: 'black-field'},
      {address: 'c8', value: blackOfficer, color: 'white-field'},
      {address: 'd8', value: blackQueen, color: 'black-field'},
      {address: 'e8', value: blackKing, color: 'white-field'},
      {address: 'f8', value: blackOfficer, color: 'black-field'},
      {address: 'g8', value: blackHorse, color: 'white-field'},
      {address: 'h8', value: blackElephant, color: 'black-field'},
      {address: 'a7', value: blackPawn, color: 'black-field'},
      {address: 'b7', value: blackPawn, color: 'white-field'},
      {address: 'c7', value: blackPawn, color: 'black-field'},
      {address: 'd7', value: blackPawn, color: 'white-field'},
      {address: 'e7', value: blackPawn, color: 'black-field'},
      {address: 'f7', value: blackPawn, color: 'white-field'},
      {address: 'g7', value: blackPawn, color: 'black-field'},
      {address: 'h7', value: blackPawn, color: 'white-field'},
      {address: 'a6', value: '', color: 'white-field'},
      {address: 'b6', value: '', color: 'black-field'},
      {address: 'c6', value: '', color: 'white-field'},
      {address: 'd6', value: '', color: 'black-field'},
      {address: 'e6', value: '', color: 'white-field'},
      {address: 'f6', value: '', color: 'black-field'},
      {address: 'g6', value: '', color: 'white-field'},
      {address: 'h6', value: '', color: 'black-field'},
      {address: 'a5', value: '', color: 'black-field'},
      {address: 'b5', value: '', color: 'white-field'},
      {address: 'c5', value: '', color: 'black-field'},
      {address: 'd5', value: '', color: 'white-field'},
      {address: 'e5', value: '', color: 'black-field'},
      {address: 'f5', value: '', color: 'white-field'},
      {address: 'g5', value: '', color: 'black-field'},
      {address: 'h5', value: '', color: 'white-field'},
      {address: 'a4', value: '', color: 'white-field'},
      {address: 'b4', value: '', color: 'black-field'},
      {address: 'c4', value: '', color: 'white-field'},
      {address: 'd4', value: '', color: 'black-field'},
      {address: 'e4', value: '', color: 'white-field'},
      {address: 'f4', value: '', color: 'black-field'},
      {address: 'g4', value: '', color: 'white-field'},
      {address: 'h4', value: '', color: 'black-field'},
      {address: 'a3', value: '', color: 'black-field'},
      {address: 'b3', value: '', color: 'white-field'},
      {address: 'c3', value: '', color: 'black-field'},
      {address: 'd3', value: '', color: 'white-field'},
      {address: 'e3', value: '', color: 'black-field'},
      {address: 'f3', value: '', color: 'white-field'},
      {address: 'g3', value: '', color: 'black-field'},
      {address: 'h3', value: '', color: 'white-field'},
      {address: 'a2', value: whitePawn, color: 'white-field'},
      {address: 'b2', value: whitePawn, color: 'black-field'},
      {address: 'c2', value: whitePawn, color: 'white-field'},
      {address: 'd2', value: whitePawn, color: 'black-field'},
      {address: 'e2', value: whitePawn, color: 'white-field'},
      {address: 'f2', value: whitePawn, color: 'black-field'},
      {address: 'g2', value: whitePawn, color: 'white-field'},
      {address: 'h2', value: whitePawn, color: 'black-field'},
      {address: 'a1', value: whiteElephant, color: 'black-field'},
      {address: 'b1', value: whiteHorse, color: 'white-field'},
      {address: 'c1', value: whiteOfficer, color: 'black-field'},
      {address: 'd1', value: whiteQueen, color: 'white-field'},
      {address: 'e1', value: whiteKing, color: 'black-field'},
      {address: 'f1', value: whiteOfficer, color: 'white-field'},
      {address: 'g1', value: whiteHorse, color: 'black-field'},
      {address: 'h1', value: whiteElephant, color: 'white-field'},
    ];
    return (
      <div className="shahvats-dashboard">
        {this.showField(position)}
      </div>
    );
  }
}

export default ShahvatsDashboard;