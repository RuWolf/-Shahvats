const {Router} = require('express');
const router = Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  console.log(req.body)
  const {nick, password} = req.body;
  const user = await User.findOne({nick});
  console.log(user)

  if (user && (user.password === password)) {
    res.json({login: true})

  } else {
    res.json({login: false})
  }
});

router.post('/register', async (req, res) => {
  const {nick, password} = req.body;

  const user = new User({nick: nick, password: password, gameId: ''});
  try {
    await user.save();
    res.json({register: true})
  } catch (e) {
    console.log(e);
    res.json({register: false})
  }
});

module.exports = router;