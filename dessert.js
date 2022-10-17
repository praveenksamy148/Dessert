const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DessertSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'No description is provided'
        },
        rating: {
            type: String,
            default: 'No rating'
        }
    },
    {collection: 'desserts'}
);

module.exports = mongoose.model('desserts', DessertSchema);