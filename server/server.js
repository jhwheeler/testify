const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

const PORT = process.env.PORT || 5813;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'))
});

app.listen(PORT, () => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const timeNow = new Date().toLocaleTimeString('en-us', options);

  console.log(`Testify server listening on port ${PORT}: ${timeNow}`);
});

module.exports = { app };

