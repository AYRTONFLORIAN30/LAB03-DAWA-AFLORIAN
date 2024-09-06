import { Router } from 'express';
const router = Router();

// Ruta para listar categorías
router.get('/categoria', (req, res) => {
    res.render('categoria/list', { categorias: [ /* datos de prueba o reales */ ] });
});

// Ruta para añadir nueva categoría
router.get('/categoria/add', (req, res) => {
    res.render('categoria/add');
});

// Ruta para editar una categoría
router.get('/categoria/edit/:id', (req, res) => {
    const { id } = req.params;
    // Aquí deberías buscar la categoría por id en tu base de datos
    const categoria = {
        id,
        nombre: "Electrónica",
        descripcion: "Dispositivos y accesorios electrónicos"
    }; // Simulación de datos para demostración
    res.render('categoria/edit', { categoria });
});

export default router;
