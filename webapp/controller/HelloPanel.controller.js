sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("learning.controller.HelloPanel", {
         onInit() {

             const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
        }   
,
      onShowHello() {
         // show a native JavaScript alert
        //  alert("Hello World");
         MessageToast.show("Hello World");

      },
      async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "learning.view.HelloDialog"
            });
        
            this.oDialog.open();
        }
    });
});