const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const weather = require('./routes/weather');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 minutes
  max: 10, // Limit each IP to 10 requests per `window` (here, per 10 minutes)
});

app.use(limiter);
app.set('trust proxy', 1);

app.use('/api', weather);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
