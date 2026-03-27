const mongoose = require('mongoose');

const citationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    publisher: { type: String },
});

const Citation = mongoose.model('Citation', citationSchema);
module.exports = Citation;