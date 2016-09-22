/**
 * Created by crafol on 20/09/16.
 */


//parseMenu(menu, JSON.menu);

menu = (function () {

    var _menu = {};
    var _data = {};

    function fnGetMenu() {
        return _menu;
    }

    function fnMenuDinamico(obj) {
        var result = '';
        $.each(obj, function (i) {
            if (this.items != null) {
                result = result + '<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
                    this.caption + '<span class="caret"></span></a><ul class="dropdown-menu">' +
                    fnMenuDinamico(this.items) + '</ul></li>';
            } else {
                result = result + '<li>' + this.link + this.caption + '</li>';
            }
        })
        return result;
    }

    function fnIniciar() {

        _menu = $('#navbarDinamico');

        $.getJSON("../DATA/menu.json", function (json) {
            _data = json;
        }).done(function () {
            console.log(_data);
            _menu.html(fnMenuDinamico(_data));
        });

    }

    return {
        getMenu: fnGetMenu,
        iniciar: fnIniciar
    }

})();

menu.iniciar();
