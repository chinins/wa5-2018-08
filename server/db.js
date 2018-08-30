const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wa5-201808', {
  useNewUrlParser: true
})
  .then(() => console.log('connected to DB'));