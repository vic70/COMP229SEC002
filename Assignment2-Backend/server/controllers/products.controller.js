import Products from "../models/products.model.js";
//import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const productByID = async (req, res, next, id) => {
  try {
    let product = await Products.findById(id); //return a query
    if (!product)
      return res.status("400").json({
        error: "Product not found",
      });
    req.product = product;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve product",
    });
  }
};

const list = async (req, res) => {
  try {
    //remove the bracket from the search character if have values
    //if no query, return empty string
    const nameContains = req.query.name ? req.query.name.slice(1, -1) : "";

    // find the product by name contains the search character
    // if the search character is empty, return all products
    let products = await Products.find({
      name: { $regex: nameContains, $options: "i" },
    }).select("name description category price quantity category");
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const create = async (req, res) => {
  const product = new Products(req.body);
  try {
    await product.save();
    res.status(200).json({
      message: "Successfully created product!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removeAll = async (req, res) => {
  //delete all products
  try {
    await Products.deleteMany({});
    res.status(200).json({ message: "All products removed!" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const readbyID = (req, res) => {
  let product = req.product;
  res.status(200).json(product);
};

const updatebyID = async (req, res) => {
  try {
    let updatedProduct = await req.product.updateOne(req.body);
    res.status(200).json(updatedProduct);

    // let product = req.product;
    // console.log("product before", product);
    // product = extend(product, req.body);
    // console.log("product After", product);
    //await product.save();

    //res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removebyID = async (req, res) => {
  try {
    let product = req.product;
    let deletedProduct = await product.deleteOne();
    //Declare and/or execute this query as a deleteOne() operation. Works like remove, except it deletes at most one document regardless of the single option.

    res.json(deletedProduct);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  productByID,
  list,
  create,
  removeAll,
  readbyID,
  updatebyID,
  removebyID,
};
