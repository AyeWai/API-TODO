const router = require('express').Router()

const controller = require('./controller.js')

// Express does not resolve params with use so we have to explicitly tell the full route here
const baseRoute = '/:articleId/comment'

router.get(`${baseRoute}/`, controller.getAllC)
router.post(`${baseRoute}/`, controller.createComment)

module.exports = router
