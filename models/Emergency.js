const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    emergency_contacts: [
        {
            name: String,
            relation: String,
            phone: String
        }
    ],
    reports: [
        {
            report_type: String,
            report_details: String,
            date: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Emergency', EmergencySchema);
