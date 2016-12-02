const express = require('express');
const router = express.Router();

const getAll = require('./handlers/getAll');
const getSearch = require('./handlers/getSearch');
const postPhone = require('./handlers/postPhone');
const updatePhone = require('./handlers/updatePhone');
const deletePhone = require('./handlers/deletePhone');


router.get('/data', getAll )
router.get('/search', getSearch)
router.post('/add', postPhone)
router.put('/update/:id', updatePhone)
router.delete('/delete/:id', deletePhone)

module.exports = router;