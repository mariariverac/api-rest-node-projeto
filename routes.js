const express = require('express');
const router = express.Router();

const User = require('./models/user');

// Definindo rotas
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).send('Usuário não encontrado');
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.post('/users', async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: { id: req.params.id}
        });
        res.json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.destroy({
            where: { id: req.params.id}
        });
        res.json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;