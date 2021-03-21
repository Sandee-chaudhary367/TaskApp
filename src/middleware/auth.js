const User=require("../model/user");
const jwt=require("jsonwebtoken");

//to autherise the user to check it can do certain tasks or not
const auth=async function(req,res,next){
   try {
       const token=localStorage.getItem("Token");
       const decoded=jwt.verify(token,"SaChaudhary");

       const user=await User.findOne({_id:decoded._id,"tokens.token":token});
       if(!user){
           throw new Error();
       }
       req.token=token;
    req.user=user;
    next();
   } catch (e) {
       console.log(e);
       res.status(401).send({Error:"Please authenticate"});
   }
}
module.exports=auth;