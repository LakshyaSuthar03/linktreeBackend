import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js";
export async function dashboardController(req, res) {
  try {
    const userJwt = req.body.userJwt;
    if (userJwt) {
      const userEmail = jwt.decode(userJwt).email;
      console.log(userEmail);
      const user = await userModel.findOne({ email: userEmail });
      const userDetails = {
        name: user.name,
        avatar: user.avatar,
        linksLength: user.link.length,
        links: user.link,
        handle: user.handle,
      };

      return res.json({
        message: "User Details fetched!",
        status: "success",
        userDetails,
      });
    } else {
      return res.json({
        message: "token not received!",
        status: "error",
      });
    }
  } catch (error) {
    return res.json({
      message: error.message,
      status: "error",
    });
  }
}
