import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, default: "guest" },
  handle: { type: String, require: true },
  bio: { type: String, default: "default bio" },
  email: { type: String, require: true, unique: true },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1060&t=st=1721884525~exp=1721885125~hmac=b18818077ad7e084480adfa553fa6bed615336c642d51d93c86b841c9bc2524a",
  },
  password: { type: String, require: true },
  link: [
    {
      url: { type: String },
      title: { type: String },
    },
  ],
  social: [
    {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
  ],
  linkTreeViews: { type: Number, default: 0 },
  themes: [
    {
      id: { type: Number },
      name: { type: String, default: "default" },
      colors: { type: Array, default: ["1d1d1d", "1d1d1d", "cccccc"] },
    },
    {
      id: { type: Number },
      name: { type: String, default: "theme1" },
      colors: { type: Array, default: ["2c3e50", "1d1f0f", "1abc9c"] },
    },
  ],
  currentTheme: {
    id: { type: Number },
    name: { type: String, default: "default" },
    colors: { type: Array, default: ["1d1d1d", "1d1d1d", "cccccc"] },
  },
});
const user = new mongoose.model("user", userSchema);
export default user;
