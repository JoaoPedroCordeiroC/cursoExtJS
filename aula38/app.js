Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 38  - Card Layout',
    autoShow: true,

    //autoScroll: true,

    // Definimos o tipo do layout
    layout: 'card',
    // Seleciona qual item panel será mostrado na tela. Por padrão é o item 0.
    activeItem: 0,
    items: [
        {
            /* O card layout ocupará todo o espaço da janela em que foi definido,
                por padrão será renderizado em tela o item 0 dos panels, e os
                demais ficarão escondidos atrás deste primeiro. */
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Card Layout - tela 01',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Next',
                    handler: function(btn, e, eOpts) {
                        /* up('window') vai achar a janela para podermos pegar a
                            referencia da janela. E trocou o activeItem por 1 */
                        var win = btn.up('window');
                        win.getLayout().setActiveItem(1);
                    }
                }]
            }]
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Card Layout - tela 02',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Voltar',
                    handler: function(btn, e, eOpts) {
                        var win = btn.up('window');
                        win.getLayout().setActiveItem(0);
                    }
                }]
            }]
        }

    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});