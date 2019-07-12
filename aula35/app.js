Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 400,
    width: 500,

    title: 'Aula 34  - Absolute Layout',

    autoShow: true,

    //autoScroll: true,

    // Definimos o tipo do layout
    layout: 'absolute',

    items: [
        {
            xtype: 'panel',
            title: 'painel 1',
            // Define a posição desejada
            x: 10,
            y: 30,
            html: 'Conteúdo do painel 1'
        },
        {
            xtype: 'panel',
            title: 'painel 2',
            x: 40,
            y: 90,
            html: 'Conteúdo do painel 1'
        }/*
        {
            xtype: 'panel',
            title: 'painel 3',       
        } */  
        
    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});