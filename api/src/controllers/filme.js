import FilmeRepository from "../models/filmeModel.js";

function findAll(req, res) {
  FilmeRepository.findAll().then((result) => res.json(result));
}

function findFilme(req, res) {
  FilmeRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addFilme(req, res) {
  try{
    const filme = await FilmeRepository.create({
      nome: req.body.nome,
      sinopse: req.body.sinopse,
      cartaz: req.body.cartaz
    })

    res.json(filme);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updateFilme(req, res) {
  try{
    await FilmeRepository.update(
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

    const filmeAtualizado = await FilmeRepository.findByPk(req.params.id);
    res.json(filmeAtualizado);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deleteFilme(req, res) {
  await FilmeRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  FilmeRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addFilme, findFilme, updateFilme, deleteFilme };