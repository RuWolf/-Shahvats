const {Router} = require('express');
const router = Router();
const User = require('../models/user');
const Game = require('../models/game');


router.post('/newGame', async (req, res) => {
  const {nickYour,nickPartner } = req.body;
  const positions = {
    a8: blackElephant,
    b8: blackHorse,
    c8: blackOfficer,
    d8: blackQueen,
    e8: blackKing,
    f8: blackOfficer,
    g8: blackHorse,
    h8: blackElephant,
    a7: blackPawn,
    b7: blackPawn,
    c7: blackPawn,
    d7: blackPawn,
    e7: blackPawn,
    f7: blackPawn,
    g7: blackPawn,
    h7: blackPawn,
    a6: '',
    b6: '',
    c6: '',
    d6: '',
    e6: '',
    f6: '',
    g6: '',
    h6: '',
    a5: '',
    b5: '',
    c5: '',
    d5: '',
    e5: '',
    f5: '',
    g5: '',
    h5: '',
    a4: '',
    b4: '',
    c4: '',
    d4: '',
    e4: '',
    f4: '',
    g4: '',
    h4: '',
    a3: '',
    b3: '',
    c3: '',
    d3: '',
    e3: '',
    f3: '',
    g3: '',
    h3: '',
    a2: whitePawn,
    b2: whitePawn,
    c2: whitePawn,
    d2: whitePawn,
    e2: whitePawn,
    f2: whitePawn,
    g2: whitePawn,
    h2: whitePawn,
    a1: whiteElephant,
    b1: whiteHorse,
    c1: whiteOfficer,
    d1: whiteQueen,
    e1: whiteKing,
    f1: whiteOfficer,
    g1: whiteHorse,
    h1: whiteElephant,
  }

  console.log(nickYour);
  console.log(nickPartner);

  let you = await User.find({nickYour});
  let partner = await User.find({nickPartner})

  const game = new Game({positions:[], white: nickYour, black: nickPartner})


});

module.exports = router;