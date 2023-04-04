import FilmeParaVerRepository from "../models/filmeParaVerModel.js";

function findAll(req, res) {
  FilmeParaVerRepository.findAll().then((result) => res.json(result));
}

function findFilmeParaVer(req, res) {
  FilmeParaVerRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addFilmeParaVer(req, res) {
  try{
    const filmeParaVer = await FilmeParaVerRepository.create({
      user_id: req.body.user_id,
      filme_id: req.body.filme_id
    })

    res.json(filmeParaVer);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updateFilmeParaVer(req, res) {
  try{
    await FilmeParaVerRepository.update(
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

    const filmeParaVerAtualizado = await FilmeParaVerRepository.findByPk(req.params.id);
    res.json(filmeParaVerAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deleteFilmeParaVer(req, res) {
  await FilmeParaVerRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  FilmeParaVerRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addFilmeParaVer, findFilmeParaVer, updateFilmeParaVer, deleteFilmeParaVer };