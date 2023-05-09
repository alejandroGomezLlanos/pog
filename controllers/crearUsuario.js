const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = express.request) => {
  const { name, email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email: email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "el usuario con ese correo ya existe",
      });
    }

    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    res.status(200).json({
      ok: true,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
