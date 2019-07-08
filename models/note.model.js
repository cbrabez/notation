const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    createdBy: {
                id: {
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'User'
            }
        }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);