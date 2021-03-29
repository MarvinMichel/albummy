const router = require('express').Router()

const upload = require('../middleware/uploadImage')
const createImage = require('../middleware/createImage')

router.get('/', (req, res) => {
  res.render('upload')
})

router.post('/', upload.single('file'), (req, res) => {
  const image = {
    name: req.body.name,
    desc: req.body.desc,
    data: req.file.buffer,
    mimetype: req.file.mimetype
  }

  createImage(image)
  
  res.redirect(301, '/')
})

module.exports = router