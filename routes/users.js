const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Certifique-se de que o caminho está correto

// Endpoint para obter informações do usuário pelo ID
router.get('/v1/user/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json({
      id: user.id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
