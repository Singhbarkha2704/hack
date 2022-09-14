const Product = require("../models/Product");
const Sales = require("../models/Sale")
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//GET ALL PRODUCTS
router.get("/get", async (req, res) => {
    try {
        products = await Sales.find();
        res.status(200).json(products);
      }
     catch (err) {
      res.status(500).json(err);
    }
});

router.post("/record", async (req, res) => {
    console.log("started");
    // console.log(req.body);
    res.send("success");
    console.log(req.body);
    let key = 0;
    for(let i=0;i<req.body.cart.length;i++){
        let title = req.body.cart[i].title
        console.log(title);
        let obj = {
            "title": req.body.cart[i].title,
            "category":req.body.cart[i].category,
            "price":req.body.cart[i].price*req.body.cart[i].cartQuantity,
            "quantity":req.body.cart[i].cartQuantity,
            "email":req.body.email,
        }
        
        new Sales(obj)
        .save()
        .catch((err)=>{
          console.log("err");
        });
        // console.log(obj);
    }
    
    });

    module.exports = router;