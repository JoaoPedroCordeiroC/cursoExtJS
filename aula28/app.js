Ext.onReady(function() {

    // Quando for usar tooltip precisa desta configuração
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.Button', {
        text: 'Botão pequeno',
        renderTo: 'btn1',       //Renderiza para o lugar passado
        tooltip: 'Exemplo de tooltip',
        listeners: {
            click: function(btn) {
                btn.setText('Cliquei no botão');
            },
            mouseover: function(btn) {
                btn.setText('Passei o mouse')
            },
            mouseout: function(btn) {
                btn.setText('Tirei o mouse')
            }
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão medio',
        renderTo: 'btn2',       
        scale: 'medium',    //Define o tamanho do botão
        handler: function() {
            console.log('Botão medio!');
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão grande',
        renderTo: 'btn3',       
        scale: 'large',
        handler: function() {
            console.log('Botão grande!');
            btn.setDisabled(false); //Habilita o botão 4 que está desabilitado
        }
    });

    var btn = Ext.create('Ext.Button', {
        text: 'Botão pequeno',
        renderTo: 'btn4',       
        disabled: true,     //Desabilita o botão
        handler: function() {
            console.log('Botão pequeno!');
        }
    });

    //  --------------- AQUI ESTÃO OS ÍCONES ---------------- //

    Ext.create('Ext.Button', {
        renderTo: 'btn5',       
        iconCls: 'add',
        handler: function() {
            console.log('Só ícone pequeno!');
        }
    });

    Ext.create('Ext.Button', {
        renderTo: 'btn6',       
        scale: 'medium',
        iconCls: 'add',
        handler: function() {
            console.log('Só ícone médio!');
        }
    });

    Ext.create('Ext.Button', {
        renderTo: 'btn7',       
        scale: 'large',
        iconCls: 'add',
        handler: function() {
            console.log('Só ícone grande!');
        }
    });

    // ------- Botão com ícone e texto -------- //

    Ext.create('Ext.Button', {
        text: 'pequeno',    // Adiciona texto junto com o ícone
        iconAlign: 'top',  // Direciona o ícone a left/rigth/bottom/top do texto  
        renderTo: 'btn8',       
        iconCls: 'add',
        enableToggle: true,
        toggleHandler: function(btn, state) {   
            console.log(state); // Mostra o estado do botão
        }
    });

    Ext.create('Ext.Button', {
        text: 'médio',
        iconAlign: 'top',
        renderTo: 'btn9',    
        scale: 'medium',
        iconCls: 'add',
        enableToggle: true
    });

    Ext.create('Ext.Button', {
        text: 'grande',
        iconAlign: 'top',
        renderTo: 'btn10',       
        scale: 'large',
        iconCls: 'add',
        enableToggle: true
    });

    // ---------- Botões com link ---------- //

    Ext.create('Ext.Button', {
        text: 'link',
        renderTo: 'btn11',       
        iconCls: 'add',
        tooltip: 'Clique para redicionar ao Google',
        href: 'http://google.com'
    });

    Ext.create('Ext.Button', {
        text: 'link',
        renderTo: 'btn12',       
        scale: 'medium',
        iconCls: 'add',
        href: 'http://google.com'
    });

    Ext.create('Ext.Button', {
        text: 'link',
        renderTo: 'btn13',       
        scale: 'large',
        iconCls: 'add',
        href: 'http://google.com'
    });

    // -------------- Botão tipo Split ------------- //

    Ext.create('Ext.button.Split', {
        renderTo: 'btn14',
        text: 'Opções',
        tooltip: 'tooltip do botão',
        // handle a click on the button itself
        handler: function() {
            alert("The button was clicked");
        },
        menu: Ext.create('Ext.menu.Menu', {
            items: [
                // these will render as dropdown menu items when the arrow is clicked:
                {text: 'Item 1', handler: function(){ alert("Item 1 clicked"); }},
                {text: 'Item 2', handler: function(){ alert("Item 2 clicked"); }}
            ]
        })
    });

    // -------------- Botão tipo Cycle ------------- //

    Ext.create('Ext.button.Cycle', {
        showText: true,
        prependText: 'View as ',
        renderTo: 'btn15',
        menu: {
            id: 'view-type-menu',
            items: [{
                text: 'text only',
                iconCls: 'view-text',
                checked: true
            },
            {
                text: 'HTML',
                iconCls: 'view-html'
            }]
        },
        changeHandler: function(cycleBtn, activeItem) {
            Ext.Msg.alert('Change View', activeItem.text);
        }
    });
});