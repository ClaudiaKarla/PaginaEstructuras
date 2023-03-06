const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    position: {
        type: String,
      },
      service: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    message: {
        type: String,
        required: true,
      },
  
  },
  {
    // this second object adds extra properties: createdAt and updatedAt
    timestamps: true
  }
)

const Client = model('Client', clientSchema)

module.exports = Client
