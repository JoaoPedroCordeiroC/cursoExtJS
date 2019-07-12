Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 41  - VBox Layout',
    autoShow: true,
    layout: {
        type: 'vbox'//,
        // Stretch pegará toda a altura do container pai para todos os items panels
        // O stretchmax pegará a altura do panel maior e jogar para os outros 
        // Podemos usar também o left/center/right
        //align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'VBox Layout - tela 50%',
            width: 200,
            /* O flex soma o tamanho de todos os flex e divide o tamanho do panel
                para eles. Cada flex terá a procentagem da soma definida
                em cada um deles. */ 
            flex: 1 // 1/6
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            html: 'VBox Layout - tela 50%',
            flex: 2 // 2/6
        },
        {
            xtype: 'panel',
            title: 'Painel 3',
            html: 'VBox Layout - tela 50% -------------------',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Next'
                }]
            }],
            width: '50%',
            flex: 3 // 3/6
        }

    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});