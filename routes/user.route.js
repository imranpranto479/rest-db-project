const express = require("express");
const { getAllUsers, 
    createUser, 
    getOneUser, 
    deleteUser,
    updateUser
} = require("../controllers/user.controller");
const router = express.Router();


router.get("/", getAllUsers);// user.controller.js e logic
router.post("/",createUser);
router.get("/:id",getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
//exporting router

module.exports = router;