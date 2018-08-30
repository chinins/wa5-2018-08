const express = require('express');
const app = express();
const db = require('./db.js');
const cors = require('cors');

const TopicsController = require('./controllers/topics.controller');

app.use(cors());
app.use(express.json());

app.get('/topics', TopicsController.getTopics);
app.post('/topics', TopicsController.createTopic);
app.delete('/topics/:id', TopicsController.deleteTopic);
app.put('/topics/:id/:direction', TopicsController.voteTopic);

app.listen(3001, console.log(`Server listening on port 3001`));