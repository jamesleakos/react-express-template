const path = require("path")
const express = require("express"); // npm installed

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', (req, res) => {
  res.status(200).send('hi');
})

app.listen(3000);