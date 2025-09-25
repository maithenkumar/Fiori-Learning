sap.ui.define([
    "sap/ui/core/mvc/Controller",
    	"sap/ui/core/mvc/XMLView",
        "sap/m/MessageToast",
           "sap/ui/model/json/JSONModel"


], (Controller, XMLView, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("learning.controller.Main", {
        onInit() {

             const oData = {
            recipient : {
               name : "World",
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
                name: "learning.fragment.HelloDialog"
            });
        
            this.oDialog.open();    
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
    });
});