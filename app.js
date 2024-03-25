const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const routes = require('./routes');

const { sequelize } = require('./models/index');
const User = require('./models/user');

sequelize.sync({ force: false }).then(() => {
 console.log('Database & tables created!');
});

app.use('/api', routes);

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
