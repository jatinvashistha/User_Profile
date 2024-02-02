import app from "./app.js";
import { connectedDB } from "./config/database.js";
  

connectedDB(); 
app.listen(process.env.PORT,()=>{
console.log(`server is running on port: ${process.env.PORT}`)
})