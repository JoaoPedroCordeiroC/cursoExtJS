Ext.onReady(function(){
   
    // Criando botão
    Ext.create('Ext.Button', {
        text: 'Alerta',
        renderTo: 'btnAlert',
        //Função handler vai ser chamada toda vez que clicar no botão
        handler: function() {
            Ext.MessageBox.alert('Alerta', 'Simples Alerta!', function(btn) {
                console.log('apertou o botão ' + btn);
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Confirmação',
        renderTo: 'btnConfirm',
        handler: function() {
            Ext.MessageBox.confirm('Confirmação', 
                'Tem certeza que deseja excluir o registro?', function(btn) {
            console.log('apertou o botão ' + btn);
            if (btn == 'yes') {
                Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
            } else if (btn == 'no') {
                console.log('Cancelou');
            }

            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Prompt',
        renderTo: 'btnPrompt',
        handler: function() {
            Ext.MessageBox.prompt('Prompt', 
                'Qual é o seu nome?', function(btn, text) {
                console.log('apertou o botão ' + btn);
                console.log('Inseriu o texto ' + text);

            if (btn == 'ok') {
                Ext.MessageBox.alert('Bem Vindo', 'Bem vindo ' + text + '!');
            } else if (btn == 'cancel') {
                console.log('Cancelou');
            }

            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Prompt Multiline',
        renderTo: 'btnPromptMult',
        handler: function() {
            Ext.MessageBox.prompt('Prompt', 
                'O que você gosta de fazer?', function(btn, text) {
                console.log('apertou o botão ' + btn);
                console.log('Inseriu o texto ' + text);

            if (btn == 'ok') {
                Ext.MessageBox.alert('Mensagem', text);
            } else if (btn == 'cancel') {
                console.log('Cancelou');
            }

            }, this, true, 'Descreva aqui o que gosta de fazer: ');
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - ERROR',
        renderTo: 'btnError',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Erro!',
                msg: 'Alguma coisa deu errado!',
                icon: Ext.MessageBox.ERROR
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - INFO',
        renderTo: 'btnInfo',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Info!',
                msg: 'Registro deletado com sucesso!',
                icon: Ext.MessageBox.INFO
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - QUESTION',
        renderTo: 'btnQuestion',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Pergunta!',
                msg: 'Você tem certeza que deseja fazer isso?',
                icon: Ext.MessageBox.QUESTION
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - WARNING',
        renderTo: 'btnWarning',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Atenção!',
                msg: 'Por favor, cancele a operação!',
                icon: Ext.MessageBox.WARNING
            });
        }
    });

    // ---------------------- AQUI ESTÃO OS BOTÕES ---------------------------

    Ext.create('Ext.Button', {
        text: 'Botão - CANCEL',
        renderTo: 'btnCancel',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Botão - Cancelar!',
                msg: 'Por favor, cancele a operação!',
                icon: Ext.MessageBox.WARNING,
                buttons: Ext.MessageBox.CANCEL,
                //Função de callback
                fn: function(btn) {
                    console.log('Apertou o botão ' + btn);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - NO',
        renderTo: 'btnNo',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Botão - No!',
                msg: 'Você gosta de alface?',
                buttons: Ext.MessageBox.NO,
                //Função de callback
                fn: function(btn) {
                    console.log('Apertou o botão ' + btn);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - OK',
        renderTo: 'btnOk',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Botão - OK!',
                msg: 'Eu gostei de ExtJS',
                buttons: Ext.MessageBox.OK,
                //Função de callback
                fn: function(btn) {
                    console.log('Apertou o botão ' + btn);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - OKCANCEL',
        renderTo: 'btnOkCancel',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Botão - OKCANCEL!',
                msg: 'Tem certeza que deseja apagar o registro?',
                buttons: Ext.MessageBox.OKCANCEL,
                //Função de callback
                fn: function(btn) {
                    console.log('Apertou o botão ' + btn);
                    if (btn == 'ok') {
                        Ext.MessageBox.alert('Mensagem', 
                            'Registro apagado com sucesso!');
                    };
                }
            });
        }
    });

    
    Ext.create('Ext.Button', {
        text: 'Botão - YES',
        renderTo: 'btnYes',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Botão - YES!',
                msg: 'Você gosta de bolo de chocolate?',
                buttons: Ext.MessageBox.YES,
                //Função de callback
                fn: function(btn) {
                    console.log('Apertou o botão ' + btn);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - YESNO',
        renderTo: 'btnYesNo',
        handler: function() {
            Ext.MessageBox.show({
                title:'Botão - YESNO',
                msg: 'Você tem certeza que deseja apagar o registro?',
                buttons: Ext.MessageBox.YESNO,
                fn: function(btn){
                    console.log('apertou o botão ' + btn);
                    if (btn == 'yes') {
                        Ext.MessageBox.alert('Mensagem', 
                            'Registro apagado com sucesso!');
                    };
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - YESNOCANCEL',
        renderTo: 'btnYesNoCancel',
        handler: function() {
            Ext.MessageBox.show({
                title:'Botão - YESNOCANCEL',
                msg: 'Você tem certeza que deseja apagar o registro?',
                buttons: Ext.MessageBox.YESNOCANCEL,
                fn: function(btn){
                    console.log('apertou o botão ' + btn);
                    if (btn == 'yes') {
                        Ext.MessageBox.alert('Mensagem', 
                            'Registro apagado com sucesso!');
                    } else if (btn == 'no') {
                        Ext.MessageBox.alert('Mensagem', 
                            'O registro não foi apagado!');
                    } else {
                        Ext.MessageBox.alert('Mensagem', 
                            'Operação cancelada!');
                    };
                }
            });
        }
    });
    
    Ext.create('Ext.Button', {
        text: 'Show - Prompt',
        renderTo: 'btnShowPrompt',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Show - Prompt',
                msg: 'Você gosta de bolo de chocolate por que motivo?',
                //Propriedade define se é prompt
                prompt: true,
                width: 400,
                buttons: Ext.MessageBox.OK,
                fn: function(btn, text) {
                    console.log('Apertou o botão ' + btn);
                    console.log('Texto escrito: ' + text);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - Prompt Multiline',
        renderTo: 'btnShowPromptMult',
        handler: function() {
            Ext.MessageBox.show({
                title: 'Show - Prompt',
                msg: 'Você gosta de bolo de chocolate por que motivo?',
                //Automaticamente irá fazer um prompt com várias linhas
                multiline: true,
                width: 400,
                buttons: Ext.MessageBox.OK,
                fn: function(btn, text) {
                    console.log('Apertou o botão ' + btn);
                    console.log('Texto escrito: ' + text);
                }
            });
        }
    });

});