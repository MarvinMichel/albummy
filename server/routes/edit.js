const router = require('express').Router()
const { red } = require('chalk')

const Images = require('../models/images')

router.get('/:id', async (req, res) => {
  const image = await Images.findOne({
    _id: req.params.id
  }).catch(err => console.error(red(err)))
  
  res.render('edit', { image })
})

router.post('/:id', async (req, res) => {
  await Images.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    description: req.body.desc
  }).catch(err => console.error(red(err)))

  res.redirect('/')
})

module.exports = router