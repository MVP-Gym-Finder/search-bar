const router = require('express').Router();
const model = require('../database/model');

const controller = {
  getResults: (req, res) => {
    model.get(req.params.zip)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },
};

router
  .route('/:zip')
  .get(controller.getResults);


module.exports = router;
