import mongoose, { Schema } from "mongoose";

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
    trim: true,
    minLength: 3,
    maxLength: 320,
    validate: {
      validator: (value) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        );
      },
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 100,
    trim: true,
    validate: (value) => {
      return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(
        value
      );
    },
  },
});

const User = mongoose.model("User", userSchema);
export default User;
