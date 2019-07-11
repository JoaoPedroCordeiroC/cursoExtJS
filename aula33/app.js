Ext.define('Curso.Janela', {
    extend: 'Ext.window.Window',

    height: 400,
    width:500,
    title: 'Aula 33  - Anchor Layout',

    autoShow: true,

    /* Ativa a barra de scroll, pois se não ativada não aparece os campos que 
    ficaram fora da area */
    autoScroll: true,

    // Definimos que o layout é o anchor
    layout: 'anchor',

    items: [
        {
            xtype: 'panel',
            title: 'painel 1',
            // Passamos primeiro a largura e depois a altura
            anchor: '99%, 25%'
        },
        {
            xtype: 'panel',
            title: 'painel 2',
            anchor: '90%, 50%'     
        },
        {
            xtype: 'panel',
            title: 'painel 3', 
            anchor: '50%, 20%'       
        }
        
    ]
});

Ext.onReady(function() {

    Ext.create('Curso.Janela');
    
});