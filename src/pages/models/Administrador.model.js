const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: createdAt and updatedAt
    timestamps: true
  }
)

const Admin = model('Admin', adminSchema)

module.exports = Admin
