import jogoRepository from "../models/jogoModel.js";

function findAll(req, res) {
  jogoRepository.findAll().then((result) => res.json(result));
}

function findjogo(req, res) {
  jogoRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addjogo(req, res) {
  try{
    const jogo = await jogoRepository.create({
      nome: req.body.nome,
      sinopse: req.body.sinopse,
      cartaz: req.body.cartaz
    })

    res.json(jogo);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updatejogo(req, res) {
  try{
    await jogoRepository.update(
      {
        nome: req.body.nome,
        sinopse: req.body.sinopse,
        cartaz: req.body.cartaz
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const jogoAtualizado = await jogoRepository.findByPk(req.params.id);
    res.json(jogoAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deletejogo(req, res) {
  await jogoRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  jogoRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addjogo, findjogo, updatejogo, deletejogo };