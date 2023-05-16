import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect() {
    try{
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
    }catch(e){
        console.log(e)
    }
}

export default dbConnect;