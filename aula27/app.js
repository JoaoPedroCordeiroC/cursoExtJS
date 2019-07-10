Ext.onReady(function(){

	Ext.create('Ext.window.Window', {
	    title: 'Oi',
	    height: 200,
	    width: 400,
	    layout: 'fit',
	    items: {  //Colocando uma grade vazia apenas para ilustrar o layout
	        xtype: 'grid',
	        border: false,
	        columns: [{header: 'World'}],                 //Cabeçalho apenas para mostrar, não há dados
	        store: Ext.create('Ext.data.ArrayStore', {}) // Armazenamento fictício
	    },
	    autoShow: true,
	    closeAction: 'hide'
	});

	Ext.create('Ext.window.Window',{
	    width:500,
	    height:300,
	    maximizable:false,
	    modal:true,
	    loader : {
	        url : "content.html",
	        loadMask : false,
	        autoLoad : true, // Importante
	        renderer : 'html' // esta também é a opção padrão, outras opções são dados | componente
	    },
	    title:"My First Extjs 4 window"
	    //autoShow: true
	});

});