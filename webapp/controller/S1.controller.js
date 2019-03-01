sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.navegacao.controller.S1", {

		onItemPress: function (oEvent) {
			var oParameters = oEvent.getParameters();

			// @type sap.m.StandardListItem
			var oItemPressed = oParameters.listItem;
			var sTitle = oItemPressed.getTitle();

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("exibir", {
				identificador: sTitle
			});

		},

		onPressAdd: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("adicionar");
		}

	});
});