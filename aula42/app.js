Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 41  - Table Layout',
    autoShow: true,
    layout: {
        type: 'table',
        columns: 3
    },
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Painel 1',
            // Define quantas LINHAS quero que o painel ocupe
            rowspan: 2
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            // Define quantas COLUNAS quero que o painel ocupe
            html: 'Painel 2',
            colspan: 2
        },
        {
            xtype: 'panel',
            title: 'Painel 3',
            html: 'Painel 3',
            rowspan: 1,
            colspan: 1
        },
        {
            xtype: 'panel',
            title: 'Painel 3',
            html: 'Painel 3',
            rowspan: 1,
            colspan: 1
        }

    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});