import mongoose, { Schema } from "mongoose";

const MemeSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  }, 
  memeUrl:{
    type: String,
    required: true,
  },
})

const MemeModel = mongoose.models.MemeModel || mongoose.model("MemeModel", MemeSchema);

export default MemeModel;