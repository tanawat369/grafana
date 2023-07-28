const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require:true},
    email: {type: String, require:true}
  });

  module.exports = mongoose.model('users',productSchema)
  