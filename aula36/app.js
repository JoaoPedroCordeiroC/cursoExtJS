Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 500,
    width: 700,

    title: 'Aula 36  - Border Layout',

    autoShow: true,

    //autoScroll: true,

    // Definimos o tipo do layout
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Região Central',
            // Toda vez que formos declarar um componente com border layout,
            // precisamos informar a região do panel. A center é obrigatória.
            region: 'center'
            // A região central sempre vai pegar todo o espaço disponível sobrando
        },
        {
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Região Oeste',
            // Quando usamos o oeste/leste devemos informar a sua largura
            region: 'west',
            width: '200',
            // Da a opção de esconder o panel ao lado
            collapsible: true,
            // Possibilita alterar o tamanho do panel
            split: true
        },
        {
            xtype: 'panel',
            title: 'Painel 3',
            html: 'Região Leste',
            region: 'east',
            width: '200',
            collapsible: true,
            split: true
        },
        {
            /* A região norte usará todo o espaço na horizontal, e precisamos
            definir uma altura */
            xtype: 'panel',
            title: 'Painel 4',
            html: 'Região Norte',
            region: 'north',
            height: '150',
            collapsible: true,
            split: true
        },
        {
            /* A região norte usará todo o espaço na horizontal, e precisamos
            definir uma altura */
            xtype: 'panel',
            title: 'Painel 5',
            html: 'Região Sul',
            region: 'south',
            height: '150',
            collapsible: true,
            split: true
        }
        
    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});