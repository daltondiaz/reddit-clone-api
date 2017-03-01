import mongoose from 'mongoose';

const {Schema} = mongoose;

// Added this because mpromoise (mongoose default promise library)
// is deprecated
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters or more.']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 5 characters or more.']
  },
  isDelete : { type : Boolean, default: false},
  createdAt: { type: Date, default: Date.now},
});

// Write some encription for password

const User = mongoose.model('User',userSchema);
export default User;
