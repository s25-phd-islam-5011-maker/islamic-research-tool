const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Connect to Database
mongoose.connect('mongodb://localhost:27017/islamic_research_tool', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Welcome to the Islamic Research Tool API!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));