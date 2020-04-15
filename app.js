const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);

app.use('/api', require('./router/register'));
app.use('/api', require('./router/profile'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    const mongoose = require("mongoose");
    mongoose.connect(`mongodb+srv://qwer:${config.get('pass')}@cluster0-cqhkf.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log('Server error, ', e.message);
    process.exit(1);
  }
}

start();
