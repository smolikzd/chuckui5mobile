sap.ui.jsview("testproject.TestView", {

      getControllerName : function() {
         return "testproject.TestView";
      },

      createContent : function(oController) {
          var oPage = new sap.m.Page({ title : "titulek"});
          var oButton = new sap.m.Button("idButton", {text : "Ahoj"});
          oPage.addContent(oButton);
	  return oPage;
      }

});