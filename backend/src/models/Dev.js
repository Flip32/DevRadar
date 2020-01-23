const mongoose = require('mongoose');
const PoirntSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
    github_username: String,
    name: String,
    avatar_url: String,
    bio: String,
    techs: [String],
    location: {
        type: PoirntSchema,
        index: '2dsphere'
    }

});

module.exports = mongoose.model('Dev', DevSchema);
