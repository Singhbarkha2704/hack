const Wishlist = require("../models/Wishlist");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    // console.log(req.body);
      console.log(newWishlist);
    try {
      const savedProduct = await newWishlist.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   //GET WishList
// router.get("/find/:userid", async (req, res) => {
//     try {
//       const product = await Wishlist.findById(req.params.userid);
//       res.status(200).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  //GET ALL Wishhlist
router.get("/find/:userid", async (req, res) => {
    console.log("Inside get");
    console.log(req.params.userid);
    console.log(Wishlist);
    try {
      let wishlist;
       wishlist = await Wishlist.find({"userId":req.params.userid});
      res.status(200).json(wishlist);
    } catch (err) {
      res.status(500).json(err);
    }
  });



  module.exports = router;