import { Router } from 'express';
const router = Router();

// Ruta para listar productos
router.get('/producto', (req, res) => {
    res.render('producto/list', { productos: [ /* datos de prueba o reales */ ] });
});

// Ruta para añadir nuevo producto
router.get('/producto/add', (req, res) => {
    res.render('producto/add');
});

// Ruta para editar un producto
router.get('/producto/edit/:id', (req, res) => {
    const { id } = req.params;
    // Aquí deberías buscar el producto por id en tu base de datos
    const producto = {
        id,
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 500,
        stock: 20
    }; // Simulación de datos para demostración
    res.render('producto/edit', { producto });
});

export default router;
