const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    otp_code: { type: String, required: true },
    expiry_time: { type: Date, required: true }
});

module.exports = mongoose.model('Otp', OtpSchema);
