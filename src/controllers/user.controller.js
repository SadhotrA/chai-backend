import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from front end
  //validation -not empty
  //check if user already exists:check username | email
  //check for image and avatar
  //upload them to cloudinary
  //create user object - create entry in db
  //remove password and refresh token form field
  //check for user creation
  //return response

  const { fullname, email, username, password } = req.body;
  console.log("email:", email);

  if (
    [fullname, email, username, password].some((field) => 
      field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  
  if(existedUser){
    throw new ApiError(409, "user with email or username already exists");
  }





});

export { registerUser };
