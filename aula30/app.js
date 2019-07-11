Ext.define('Blog.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.minhatoolbar',
    renderTo: document.body,
    width   : 500,
    items: [
        // Preenche o espaço em branco da toolbar jogando os itens para o final a direita
        //{ xtype: 'tbfill' },
        
        '->',   // Substitui o tbfill
        {
            // xtype: 'button', // default for Toolbars
            text: 'Button'
        },
        { xtype: 'tbspacer', width: 20},    // Adiciona espaço entre os itens
        {
            xtype: 'splitbutton',
            text : 'Split Button'
        },
        { xtype: 'tbspacer' },
        // Adiciona uma separação entre os ícones
        { xtype: 'tbseparator' },   // '-' Substitui o separator
        { xtype: 'tbspacer' },      // ' ' Substitui o spacer
        {
            xtype: 'button',
            text: 'B'
        },
        {
            xtype: 'button',
            text: 'I'
        },
        {
            xtype: 'button',
            text: 'U'
        }
    ]
});

Ext.onReady(function() {

    Ext.create('Ext.panel.Panel', {
        title: 'Aula 30 - Curso Toolbars',
        width: 600,
        height: 400,
        renderTo: Ext.getBody(),
        html: 'algum conteudo aqui.',
        
        // Instancia a classe toolbar
        dockedItems: [
            // Dock define onde ficará a toolbar
            {xtype: 'minhatoolbar', dock: 'bottom', width: 100}
        ]
    });

});