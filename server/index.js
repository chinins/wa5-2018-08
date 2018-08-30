const express = require('express');
const app = express();
const db = require('./db.js');

const TopicsController = require('./controllers/topics.controller');

app.use(express.json());

app.get('/topics', TopicsController.getTopics);
app.post('/topics', TopicsController.createTopic);
app.delete('/topics/:id', TopicsController.createTopic);
app.put('/topics/:id/:direction', TopicsController.createTopic);

app.listen(3001, console.log(`Server listening on port 3001`));