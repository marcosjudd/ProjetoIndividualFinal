import UserRepository from "../models/userModel.js";

function findAll(req, res) {
  UserRepository.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  UserRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addUser(req, res) {
  try{
    const user = await UserRepository.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    })

    res.json(user);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updateUser(req, res) {
  try{
    await UserRepository.update(
      {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const userAtualizado = await UserRepository.findByPk(req.params.id);
    res.json(userAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deleteUser(req, res) {
  await UserRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUser, findUser, updateUser, deleteUser };