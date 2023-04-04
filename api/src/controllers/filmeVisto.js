import jogoVistoRepository from "../models/jogoVistoModel.js";

function findAll(req, res) {
  jogoVistoRepository.findAll().then((result) => res.json(result));
}

function findjogoVisto(req, res) {
  jogoVistoRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addjogoVisto(req, res) {
  try{
    const jogoVisto = await jogoVistoRepository.create({
      user_id: req.body.user_id,
      jogo_id: req.body.jogo_id
    })

    res.json(jogoVisto);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updatejogoVisto(req, res) {
  try{
    await jogoVistoRepository.update(
      {
        user_id: req.body.user_id,
        jogo_id: req.body.jogo_id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const jogoVistoAtualizado = await jogoVistoRepository.findByPk(req.params.id);
    res.json(jogoVistoAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deletejogoVisto(req, res) {
  await jogoVistoRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  jogoVistoRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addjogoVisto, findjogoVisto, updatejogoVisto, deletejogoVisto };