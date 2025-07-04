import express from "express";
import { Product, Category } from '../models/index.js';






const listProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.status(200).json({ products, msg: true });
    } catch (error) {
        res.status(500).json({ error: error.message, msg: false });
    }
};

const addProduct = async (req, res) => {
  
    const images = [];

    if (req.files.image1) images.push(req.files.image1[0].path);
    if (req.files.image2) images.push(req.files.image2[0].path);
    if (req.files.image3) images.push(req.files.image3[0].path);
    if (req.files.image4) images.push(req.files.image4[0].path);



    try {
        const {
            name,
            description,
            price,
            categoryId,
            date,
        } = req.body;
        console.log(req.body)

        const newProduct = await Product.create({
            name,
            description,
            price: Number(price),
            categoryId,
            image: images, // ← أضفها هنا أيضاً
            date: new Date()
        });
        res.status(200).json({ success: true, newProduct, msg: "تم اضافة المنتج بنجاح" });
    } catch (error) {
        res.json({ err: error, msg: error });
    }
};

const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const singleProduct = await Product.findByPk(productId);
        res.json({

            msg: "this product  succesfully",
            product: singleProduct,
        });
    } catch (error) {
        return res.status(404).json({msg:error})
    }
};


const removeProducts = async (req, res) => {
    const { id } = req.body;

    try {
        const deletedCount = await Product.destroy({
            where: { id }
        });

        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const images = []
        if (req.files.image1) images.push(req.files.image1[0].path);
        if (req.files.image2) images.push(req.files.image1[0].path);
        if (req.files.image3) images.push(req.files.image1[0].path);
        if (req.files.image4) images.push(req.files.image1[0].path);
        const { id, name, description, price, image, categoryId } = req.body;
      
        const [updatedProduct] = await Product.update(
            { name, description, price, categoryId , image : images },
            { where: { id } }
        );
         if(updatedProduct === 0){
            console.log("message")
            return res.json({success : false , msg : 'لا يوجد منتج لتعديله '})
        }
        return  res.json({success : true , msg : 'تم تحديث المنتج بنجاح '})
    } catch (error) {
        return res.json(error)
    }



}




export { addProduct, listProducts, removeProducts, singleProduct, updateProduct };