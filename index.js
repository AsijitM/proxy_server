const express = require('express');
const cors = require('cors');
const app = express();
const weather = require('./routes/weather');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use('/api', weather);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
