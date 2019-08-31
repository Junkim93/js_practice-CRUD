import express from 'express';
import bodyParser from 'body-parser';
import db from './queries';

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

const PORT = 4000;

const handleListening = () => {
  console.log(`LISTENING SERVER: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
