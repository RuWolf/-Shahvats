const {Router} = require('express');
const router = Router();
const User = require('../models/user');
// const fetch = require('node-fetch');

router.post('/login', async (req, res) => {
  const { nick, password } = req.body;
  const user = await User.findOne({ nick });
  if (user) {
    req.session.moderator = user;

  }

  if (user && (user.password === password)) {
    res.json({ login: true })

  } else {
    res.json({ login: false })
  }
});



module.exports = router;