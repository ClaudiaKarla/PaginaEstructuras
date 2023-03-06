const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const proyectSchema = new Schema(
  {
    categoria: {
      type: String,
      required: true,
      enum:["Concreto (Marcos rígidos)",
      "Acero",
      "Mampostería"]
    },
    proyecto: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    fotos:[String],
    archivos:[String],
  },
  {
    // this second object adds extra properties: createdAt and updatedAt
    timestamps: true
  })

const Proyect = model('Proyect', proyectSchema)

module.exports = Proyect