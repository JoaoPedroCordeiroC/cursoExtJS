Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 400,
    width: 500,

    title: 'Aula 34  - Accordion Layout',

    autoShow: true,

    //autoScroll: true,

    // Definimos que o layout é o anchor
    layout: 'accordion',

    items: [
        {
            xtype: 'panel',
            title: 'painel 1',
        },
        {
            xtype: 'panel',
            title: 'painel 2',
        },
        {
            xtype: 'panel',
            title: 'painel 3',       
        }
        
    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});