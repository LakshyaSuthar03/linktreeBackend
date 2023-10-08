import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken";
export async function analyticsController(req, res) {
  try {
    const userJwt = req.body.userJwt;
    const userEmail = jwt.decode(userJwt).email;
    await userModel
      .findOne({ email: userEmail })
      .then((result) => {
        const totalLinks = result.link.length;
        const views = result.linkTreeViews;

        res.json({
          status: "success",
          message: "user data fetched!",
          dashboardData: [
            { title: "TotalLinks", stat: totalLinks },
            { title: "LinkTree Views", stat: views },
          ],
        });
      })
      .catch((err) => {
        res.json({
          status: "error",
          message: err.message,
        });
      });
  } catch (error) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
}
