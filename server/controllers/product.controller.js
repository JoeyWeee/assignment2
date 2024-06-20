import Product from '../models/product.js';

// Get all products
export const getAllProducts = async (req, res) => {

    const name = req.query.name;
    try {
        let products;
        if (name) {
            const regex = new RegExp(name, 'i');
            products = await Product.find({ name: regex });
        } else {
            products = await Product.find();
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new product
export const addNewProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;
    const newProduct = new Product({ name, description, price, quantity, category });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update product by ID
export const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Remove product by ID
export const removeProductById = async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndRemove(req.params.id);
        if (!removedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove all products
export const removeAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.json({ message: 'All products removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

