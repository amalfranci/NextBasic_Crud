import mongoose from "mongoose";

const DbCon =  async()=>{

    try{

         await mongoose.connect(process.env.MongoURI)
      console.log('connected to DataBase')

    }catch(error)

    {

        console.log(error)
    }

}
export default DbCon