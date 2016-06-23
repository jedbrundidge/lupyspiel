/**
 * Created by jed on 6/22/2016.
 */


//teams model
var restful = require('node-restful');
var mongoose = restful.mongoose;

//teams schema
var teamsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },

    skip: {
        type: String,
        required: true
    },

    third: {
        type: String,
        required: true
    },

    second:{
        type: String,
        required: true
    },

    lead: {
        type: String,
        required: true
    },

    club: {
        type: String,
        required: true
    }
});

module.exports = restful.model('Teams', teamsSchema);