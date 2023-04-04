import jogoParaVerRepository from "../models/jogoParaVerModel.js";

function findAll(req, res) {
  jogoParaVerRepository.findAll().then((result) => res.json(result));
}

function findjogoParaVer(req, res) {
  jogoParaVerRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addjogoParaVer(req, res) {
  try{
    const jogoParaVer = await jogoParaVerRepository.create({
      user_id: req.body.user_id,
      jogo_id: req.body.jogo_id
    })

    res.json(jogoParaVer);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updatejogoParaVer(req, res) {
  try{
    await jogoParaVerRepository.update(
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

    const jogoParaVerAtualizado = await jogoParaVerRepository.findByPk(req.params.id);
    res.json(jogoParaVerAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deletejogoParaVer(req, res) {
  await jogoParaVerRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  jogoParaVerRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addjogoParaVer, findjogoParaVer, updatejogoParaVer, deletejogoParaVer };