const mongoose = require('mongoose');

const DynamicDetailsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    occupation: { type: String },
    school_details: { 
        school_name: String,
        degree: String,
        year_of_passing: Number
    },
    residency_address: { 
        street: String,
        city: String,
        state: String,
        country: String,
        zip_code: String
    },
    contact_no: { type: String }
});

module.exports = mongoose.model('DynamicDetails', DynamicDetailsSchema);
