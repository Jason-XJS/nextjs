import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   password: String,
   email: String
});


export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

