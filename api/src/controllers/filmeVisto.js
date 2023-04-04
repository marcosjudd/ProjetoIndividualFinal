import FilmeVistoRepository from "../models/filmeVistoModel.js";

function findAll(req, res) {
  FilmeVistoRepository.findAll().then((result) => res.json(result));
}

function findFilmeVisto(req, res) {
  FilmeVistoRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addFilmeVisto(req, res) {
  try{
    const filmeVisto = await FilmeVistoRepository.create({
      user_id: req.body.user_id,
      filme_id: req.body.filme_id
    })

    res.json(filmeVisto);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updateFilmeVisto(req, res) {
  try{
    await FilmeVistoRepository.update(
      {
        user_id: req.body.user_id,
        filme_id: req.body.filme_id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const filmeVistoAtualizado = await FilmeVistoRepository.findByPk(req.params.id);
    res.json(filmeVistoAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deleteFilmeVisto(req, res) {
  await FilmeVistoRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  FilmeVistoRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addFilmeVisto, findFilmeVisto, updateFilmeVisto, deleteFilmeVisto };