import mongoose from 'mongoose';
import schema from './schema.json';

const userSchema = new mongoose.Schema(schema['users']);
const userModel = mongoose.model('user', userSchema);

export default {
  userModel
}
