const ambiente_processo = 'desenvolvimento';
const caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

const express = require("express");
const cors = require("cors");
const path = require("path");

const PORTA_APP = process.env.APP_PORT;
const HOST_APP = process.env.APP_HOST;

const app = express();
const indexRouter = require("./src/routes/index");
const empresaRouter = require("./src/routes/empresa");
const usuarioRouter = require("./src/routes/usuarios");
const maquinaRouter = require("./src/routes/maquina");
const componenteRouter = require("./src/routes/componente");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/empresa", empresaRouter);
app.use("/usuarios", usuarioRouter);
app.use("/maquina", maquinaRouter);
app.use("/componente", componenteRouter);

app.listen(PORTA_APP, function () {
 console.log(
`
     ___      ___         ________  ________  ___  ___     
    |\\  \\    /  /|       |\\   __  \\|\\   __  \\|\\  \\|\\  \\    
    \\ \\  \\  /  / /       \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\\\  \\   
     \\ \\  \\/  / /         \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\   __  \\  
      \\ \\    / /           \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\ 
       \\ \\__/ /             \\ \\_______\\ \\_______\\ \\__\\ \\__\\
        \\|__|/               \\|_______|\\|_______|\\|__|\\|__|
                                                           
                                                           
                                                           
    http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de ${process.env.AMBIENTE_PROCESSO}
`)});
