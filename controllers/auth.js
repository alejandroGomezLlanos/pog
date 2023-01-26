const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = express.request) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: erros.mapped(),
    });
  }

  res.status(200).json({
    ok: true,
    name,
    email,
    password,
  });
};

//  res.json({
//    ok: true,
//    name,
//    email,
//    password,
//  });
//};

const loginUsuario = (req, res = express.request) => {
  console.log("algo");
  res.json({
    ok: true,
  });
};

const validarToken = (req, res = express.request) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  loginUsuario,
  crearUsuario,
  validarToken,
};
