require('dotenv').config();
const mongoose = require('./db');
const User = require('./models/User');
const Otp = require('./models/Otp');
const DynamicDetails = require('./models/DynamicDetails');
const Emergency = require('./models/Emergency');

async function testSchema() {
    try {
        const user = new User({
            first_name: "Alice",
            middle_name: "L",
            last_name: "Johnson",
            email: "alice@example.com",
            password: "hashedpassword",
            gender: "Female",
            role: "User"
        });

        const savedUser = await user.save();
        console.log("✅ User Added:", savedUser);

        const otp = new Otp({
            user_id: savedUser._id,
            otp_code: "123456",
            expiry_time: new Date(Date.now() + 10 * 60000) // Expires in 10 mins
        });

        await otp.save();
        console.log("✅ OTP Added!");

        const details = new DynamicDetails({
            user_id: savedUser._id,
            occupation: "Software Engineer",
            school_details: "MIT",
            residency_address: "123 Main St, NY",
            contact_no: "1234567890"
        });

        await details.save();
        console.log("✅ Dynamic Details Added!");

    
        const emergency = new Emergency({
            user_id: savedUser._id,
            emergency_contact_name: "Bob Johnson",
            emergency_contact_no: "0987654321",
            report_details: "No recent emergencies."
        });

        await emergency.save();
        console.log("✅ Emergency Contact Added!");

        console.log("🎉 All Tests Passed Successfully!");

    } catch (error) {
        console.error("❌ Test Failed:", error);
    } finally {
        mongoose.connection.close(); 
    }
}

testSchema();
