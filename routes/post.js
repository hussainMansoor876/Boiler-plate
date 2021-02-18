const express = require('express')
const router = express.Router()
const { addSelectors, updateSettings } = require('../controllers/post')

router.post('/add-data', addSelectors)

router.post('/update-settings', updateSettings)

module.exports = router