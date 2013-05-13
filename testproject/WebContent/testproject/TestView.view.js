sap.ui.jsview("testproject.TestView", {

      getControllerName : function() {
         return "testproject.TestView";
      },

      createContent : function(oController) {
          return new sap.m.Page({
              title: "Title",
              content: [
              ]
          });
      }

});