const express = require('express');
const cors = require('cors');

require('./database/connection');
const router = require('./routers/employee');
const app = express();
app.use(
  cors({
    origin: '*',
  })
);

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

app.get('/test', (req, res) => {
  setTimeout(() => {
    res.send({ message: 'Hello World' });
  }, 5000);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
