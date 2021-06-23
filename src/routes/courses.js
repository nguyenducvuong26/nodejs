const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// [GET] /courses/:slug
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.post('/store', coursesController.store);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.put('/:id', coursesController.update);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.delete);
router.delete('/:id/force-delete', coursesController.forceDelete);
router.get('/:slug', coursesController.show);

module.exports = router;
