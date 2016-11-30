const express = require('express');
const router = express.Router();

const ensureAuthorized = require('../auth/middleware')
const getAll = require('./handlers/getAll');
const getSearch = require('./handlers/getSearch');
const postPhone = require('./handlers/postPhone');



router.get('/data', getAll )
router.get('/search', getSearch)
router.post('/add', ensureAuthorized , postPhone)

module.exports = router;