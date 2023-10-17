const routes=require("express").Router();
routes.use("/api/user",require("../controllers/usercontroller"));
routes.use("/api/city",require("../controllers/citycontroller"));
routes.use("/api/hotels",require("../controllers/hotelscontroller"));
routes.use("/api/owner",require("../controllers/ownercontroller"));
routes.use("/api/student",require("../controllers/studentcontroller"));
routes.use("/api/gallery",require("../controllers/gallerycontroller"));
routes.use("/api/user/auth",require("../controllers/userauthcontroller"));
routes.use("/api/owner/auth",require("../controllers/ownerauthcontroller"));

module.exports=routes;