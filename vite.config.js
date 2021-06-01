// vite.config.js
const { resolve } = require("path");
module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                animacion: resolve(__dirname, "pages/animacion.html"),
                bumper: resolve(__dirname, "pages/bumper.html"),
                carteleria: resolve(__dirname, "pages/carteleria.html"),
                color_2: resolve(__dirname, "pages/color_2.html"),
                color: resolve(__dirname, "pages/color.html"),
                conceptualizacion: resolve(
                    __dirname,
                    "pages/conceptualizacion.html"
                ),
                forma: resolve(__dirname, "pages/forma.html"),
                fotografia: resolve(__dirname, "pages/fotografia.html"),
                mes: resolve(__dirname, "pages/mes.html"),
                reticula: resolve(__dirname, "pages/reticula.html"),
                rotulacion: resolve(__dirname, "pages/rotulacion.html"),
                tipografia: resolve(__dirname, "pages/tipografia.html"),
                transicion: resolve(__dirname, "pages/transicion.html"),
            },
        },
    },
};
