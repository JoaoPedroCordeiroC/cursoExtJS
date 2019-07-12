Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 39  - Column Layout',
    autoShow: true,

    //autoScroll: true,

    // Definimos o tipo do layout
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Column Layout - tela 50%',
            width: 200
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Column Layout - tela 50%',
            /* columnWidth define a largura com porcentagem. Como no panel 1 
            definimos a largura em pixels, a columnWidth usará a porcentagem 
            do espaço restante */
            columnWidth: 1
        }

    ]
});