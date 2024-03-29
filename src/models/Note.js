import { Schema, model } from "mongoose"

const NoteSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
}
)

export default model("NoteModel", NoteSchema)