import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPasswords = async function (enteredPassword) {
    return await brcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await brcrypt.genSalt(10);
    this.password = await brcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
