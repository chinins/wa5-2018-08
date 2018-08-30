const Topic = require ('../models/topic');

const getTopics = (req, res) => {
  console.log('get topics');
  Topic.find()
    .sort({
      score: -1
    })
    .then(topics => {
      res.json(topics)
    });
}

const createTopic = (req, res) => {
  console.log('create topics');

  Topic.create({
    title: req.body.title
  })
    .then(topic => {
      res.json(topic)
    })
    .catch(err => {
      res.status(400).send({
        error: err.message
      })
    })
}

const voteTopic = (req, res) => {
  const amount = req.params.direction === 'up' ? 1 : -1;

  console.log('vote topics');
  Topic.findOneAndUpdate({
    _id: res.params.id
  }, {
    $inc: {
      score: amount
    }
  }, {
    new: true
  })
  .then(updatedItem => {
    res.json(updatedItem)
    .catch(e => {
      console.log(e);
      res.status(400).json(e);
    })
  })
}

const deleteTopic = (req, res) => {
  console.log('delete topics');
  Topic.findOneAndRemove({
    _id: req.params.id
  })
    .then((removedItem) => {
      if (removedItem) {
        res.sendStatus(200)
      } else {
        res.sendStatus(500)
      }
    })
}

module.exports = {
  getTopics,
  createTopic,
  voteTopic,
  deleteTopic
}