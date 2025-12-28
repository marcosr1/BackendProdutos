import Product from '../models/Product.js';

// Criar produto
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Editar produto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Product.update(req.body, { where: { id } });
        if (!updated) return res.status(404).json({ error: 'Produto não encontrado' });
        const updatedProduct = await Product.findByPk(id);
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Ativar / desativar produto
export const toggleProductStatus = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

        product.status = product.status === 'active' ? 'inactive' : 'active';
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos os produtos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Obter produto único
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
