var express = require('express')
const widgetQueries = require('../queries/widgets')

const widgetRouter = express.Router()

widgetRouter.post('/', widgetQueries.create)
widgetRouter.get('/', widgetQueries.retrieve)
widgetRouter.get('/:id', widgetQueries.retrieve)
widgetRouter.put('/:id', widgetQueries.update)
widgetRouter.delete('/:id', widgetQueries.remove);

module.exports = widgetRouter