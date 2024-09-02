const express = require("express");
const mercadoRouter = require("./routers/mercado-router.js");
const fornecedorRouter = require("./routers/fornecedor-router.js");
const produtoRouter = require("./routers/produto-router.js");

const app = express(); 
app.use(express.json);

app.use("/mercados", mercadoRouter);
app.use("/fornecedores", fornecedorRouter);
app.use("/podutos", produtoRouter);

const port = 4000;
app.listen(port, () => {
    cponsole.log(`Server is runing on port ${port}`)
})