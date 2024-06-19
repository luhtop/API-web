const express = require('express');
const app = express();
const { sequelize } = require('./models');


const clienteRoutes = require('./routes/clienteRoutes');
const cartaoRoutes = require('./routes/cartaoRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');



// Rotas da API

app.use(express.json());
app.use('/clientes', clienteRoutes);
app.use('/cartoes', cartaoRoutes);
app.use('/transacoes', transacaoRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
    try {
      await sequelize.authenticate();
      console.log('A conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  });
  