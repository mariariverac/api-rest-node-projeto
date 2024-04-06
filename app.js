const { sequelize } = require('./models/index');
const User = require('./models/user');

sequelize.sync({ force: false }).then(() => {
 console.log('Database & tables created!');
});

app.use('/api', routes);

// Rota raiz adicionada aqui
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API Express!');
});

// Inicialização do servidor mantida como estava
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
