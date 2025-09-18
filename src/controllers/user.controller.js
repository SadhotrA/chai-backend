import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res)=>{
    //get user details from front end 
    //validation -not empty
    //check if user already exists:check username | email
    //check for image and avatar
    //upload them to cloudinary
    //create user object - create entry in db
    //remove password and refresh token form field
    //check for user creation 
    //return response

  }
)

export {registerUser}