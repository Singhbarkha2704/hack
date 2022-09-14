const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body);
    console.log(newProduct);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/allcsv",verifyTokenAndAdmin, async (req, res) => {
console.log("started");
// console.log(req.body);
let key = 0;
  for(let i = 0; i < req.body.length; i++) {
    let obj = req.body[i];
    console.log(obj);
    new Product(obj)
    .save()
    .catch((err)=>{
      console.log("err");
    });


    // try {
    //   const savedProduct = await newProduct.save();
    //   console.log("saved product is  ",savedProduct);
    //   // res.status(200).json(savedProduct);
    // } catch (err) {
    //   key = 1;
    //   console.log("error");
    //   // res.status(500).json(err);
    // }
    // if(key==1){
    //   break;
    // }
}
if(key==1){
   res.status(500).json("err");
}
res.status(200).json("congrats");
  

});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;