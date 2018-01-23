const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(path.join('/public/index.html'));
})

router.get('/', (req, res) => {
});

router.post('/', (req, res) => {
  let formData = req.body.input;
  console.log('before sortinating:', formData);
  if (!req.body) return res.status(400).send('sorry');

  formData = formData.split('').sort().join('');
  console.log('after sortinating:', formData);
  res.status(200).send(formData);

});

module.exports = router;