const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
 
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      phone:req.body.phone,
    });
    console.log(newUser);
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
      console.log(201);
    } catch (err) {
      res.status(500).json(err);
      console.log(501);
    }
  });

  //LOGIN

router.post('/login', async (req, res) => {
    console.log("hh");
    console.log(req.body);
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
         console.log(user);

        !user && res.status(401).json("Wrong User Name");
          console.log("!")
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
         

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        // console.log(originalPassword);

        const inputPassword = req.body.password;
        // console.log(inputPassword);
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

            // console.log("!");
            // console.log(process.env.JWT_SEC);

        const accessToken = jwt.sign(
        {

            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"30d"}
        );
        // console.log("!");
  
        const { password, ...others } = user._doc;  
        console.log(others);
        res.status(200).json({...others,accessToken});
        

    }catch(err){
        console.log("err!!jhbh");
        res.status(500).json(err);

    }

});

module.exports = router;