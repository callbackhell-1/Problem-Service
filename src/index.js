const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//routes
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'Pong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
