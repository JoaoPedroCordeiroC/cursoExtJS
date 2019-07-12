Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 40  - HBox Layout',
    autoShow: true,
    layout: {
        type: 'hbox',
        // Stretch pegará toda a altura do container pai para todos os items panels
        // O stretchmax pegará a altura do panel maior e jogar para os outros 
        align: 'stretchmax'
    },
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'HBox Layout - tela 50%',
            /* O flex soma o tamanho de todos os flex e divide o tamanho do panel
                para eles. Cada flex terá a procentagem da soma definida
                em cada um deles. */ 
            flex: 1 // 1/6
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            html: 'HBox Layout - tela 50%',
            flex: 2 // 2/6
        },
        {
            xtype: 'panel',
            title: 'Painel 3',
            html: 'HBox Layout - tela 50%',
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
            }],
            height: 300,
            flex: 3 // 3/6
        }

    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});