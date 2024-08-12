const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Registering the route
app.use('/api/banner', require('./routes/banner'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
