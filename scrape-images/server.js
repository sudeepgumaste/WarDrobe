const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const mainRouter = require('./router')

app.use(express.json());
app.use(cors());
app.use('/api',mainRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
