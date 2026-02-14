const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const roomRoutes = require('./routes/room.route');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use(cors());
app.use('/api/rooms', roomRoutes); 

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});