import mongoose from 'mongoose';

const {Schema} = mongoose;

// Added this because mpromoise (mongoose default promise library)
// is deprecated
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title :{ type: String, required: true },
  link: String,
  text: String,
  isDelete : { type : Boolean, default: false},
  createdAt: { type: Date, default: Date.now},
  _creator: { type: Schema.ObjectId, ref: 'User'},
  _comments: [{type: Schema.ObjectId, ref: 'Comment'}],

});

const Post = mongoose.model('Post',postSchema);
export default Post;
