import bcrypt from "bcrypt";

const usuarios = [
  {
    nombre: "Joaquin",
    email: "joaquin@joaquin.com",
    confirmado: 1,
    password: bcrypt.hashSync("password", 10),
  },
];

export default usuarios;
