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

});