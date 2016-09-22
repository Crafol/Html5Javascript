/**
 * Created by crafol on 20/09/16.
 */
var app;

app = (function () {

    function fnCargaVista(vista, contenedor) {
        $(contenedor).load(vista);
    }

    function fnIniciar() {
        // Cargo Menu
        app.cargaVista('inicio/menu-titulo.vista.html', $('#navbarTitulo'));
        app.cargaVista('inicio/menu-dinamico.vista.html', $('#navbarDinamico'));
        app.cargaVista('inicio/menu-fijo.vista.html', $('#navbarFijo'));
        // Cargo Contenedor Principal
        app.cargaVista('inicio/contenedor.vista.html', $('#divContenedor'));
        // Cargo Navegador lateral
        app.cargaVista('inicio/navegador-lateral.vista.html', $('#divNavegadorLateral'));
        // Cargo Pie de pagina
        app.cargaVista('inicio/piepagina.vista.html', $('#piePagina'));
    }

    return {
        cargaVista: fnCargaVista,
        iniciar: fnIniciar
    }
})();
