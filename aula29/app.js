Ext.onReady(function() {

    // Quando for usar tooltip precisa desta configuração
    Ext.tip.QuickTipManager.init();

    //Criando menu
    Ext.create('Ext.menu.Menu', {
        width: 200,
        margin: '0 0 10 0',
        floating: false,  // usually you want this set to True (default)
        renderTo: 'menu1',
        // Itens do menu principal
        items: [{
            text: 'regular item 1',
            iconCls: 'icone'
        },{
            text: 'regular item 2',
            xtype: 'menucheckitem'
        },{
            // Separa os itens do menu
            xtype: 'menuseparator'
        },{
            text: 'regular item 3',
            // Criando um submenu
            menu: Ext.create('Ext.menu.Menu', {
                items: [{
                    text: 'Submenu1' 
                },{
                    text: 'Submenu2',
                    // Criando um submenu dentro de outro
                    menu: Ext.create('Ext.menu.Menu', {
                        items: [{
                            text: 'Sub-submenu1',
                            handler: function() {
                                Ext.Msg.alert('Sub-submenu 1', 'Você clicou no Sub-Submenu 1');
                            }
                        },{
                            text: 'Sub-submenu2'
                        },{
                            text: 'Sub-submenu3'
                        }]
                    })
                },{
                    text: 'Submenu3'
                }]
            })
        },{
            text: 'escolha uma data',
            menu:Ext.create('Ext.menu.DatePicker', {
                handler: function(dp, date){
                    Ext.Msg.alert('Date Selected', 'Você selecionou ' + Ext.Date.format(date, 'M j, Y'));
                }
            })
        },{
            text: 'Escolha uma cor',
            menu: Ext.create('Ext.menu.ColorPicker', {
                value: '000000',
                listeners: {
                    select : {
                        fn: function(menu, color, opt){ 
                            Ext.Msg.alert('Cor Selecionada', 'Você selecionou ' + color);
                        }
                    }
                }
            })
        }]
    
    });
    
    /*Ext.create('Ext.menu.Menu', {
        width: 100,
        plain: true,
        floating: false,
        renderTo: 'menu2',
        items: [{
            text: 'plain item 1'
        },{
            text: 'plain item 2'
        },{
            text: 'plain item 3'
        }]
    });*/
    
});