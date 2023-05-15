const mongoose = require('mongoose');


const Todo = mongoose.model('Todo', {

    sura: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }


})

module.exports = Todo;
