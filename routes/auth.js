const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  validarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

router.post("/", loginUsuario);

router.get("/", loginUsuario);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

router.get("/renew", validarToken);

//const {
//  crearUsuario,
//  loginUsuario,
//  revalidarToken,
//} = require("../controllers/auth");

//router.post("/", loginUsuario);
//router.post("/new", crearUsuario);
//router.get("/renew", revalidarToken);

module.exports = router;
