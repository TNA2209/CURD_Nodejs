const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  {
    collection: "acc_user",
  }
);
const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;
