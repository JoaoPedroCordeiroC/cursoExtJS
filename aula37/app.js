Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 37  - Fit Layout',
    autoShow: true,

    //autoScroll: true,

    // Definimos o tipo do layout
    layout: 'fit',
    items: [
        {
            // O painel fit ocupará todo o espaço da janela em que foi definido
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Fit Layout'
        }

    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});