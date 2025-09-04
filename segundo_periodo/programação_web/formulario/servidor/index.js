const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send({ ok: true, msg: 'A rota funcionou' });
});

app.post('/api', (req, res) => {
  console.log(req.body); // aqui chegam os dados do form
  res.send('Formulário recebido com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
