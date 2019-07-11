Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 400,
    width:500,
    title: 'Aula 32  - Auto Layout',

    autoShow: true,

    /* Ativa a barra de scroll, pois se não ativada não aparece os campos que 
    ficaram abaixo */
    autoScroll: true,

    items: [
        {
            xtype: 'panel',
            title: 'painel 1',
            height: 100
        },
        {
            xtype: 'panel',
            title: 'painel 2',
            height: 150,
            width: 400        
        },
        {
            xtype: 'panel',
            title: 'painel 3',
            height: 120,
            width: 450        
        },
        {
            xtype: 'panel',
            title: 'painel 4',
            height: 50     
        }
    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});