import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  nombreUser: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 320,
    validate:{
        validator: (valor)=>{
            return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        }
    }
  },
  password:{
type: String,
required: true,
minLength: 4,
maxLength: 50
  }
});

const  User = mongoose.model('User', userSchema);
export default  User;


