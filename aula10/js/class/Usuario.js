Ext.define('CursoExt4.class.Usuario', {

    nome : '',
    senha : '',

    constructor : function(options) {

        Ext.apply(this,  options || {});

        console.log('constructor foi chamado');
    },

});