import { connect } from "mongoose";

export const connectDb = async () => {
    try {
        await connect("mongodb+srv://carloscruz:carloscruz@cluster0.qok7gm6.mongodb.net/?retryWrites=true&w=majority")
        console.log("conexion correcta")
    } catch (e) {
        console.log(e)
        console.log("Error de conexcion con la base de datos")
    }
}