
sap.ui.jsview("com.tallymarks.z_fiori_test.view.App", {

  getControllerName: function () {
    return "com.tallymarks.z_fiori_test.view.App";
  },

  createContent: function (oController) {

    // to avoid scroll bars on desktop the root view must be set to block display
    this.setDisplayBlock(true);

    // create app
    this.app = new sap.m.App();

    // load the master page
    var master = sap.ui.xmlview("mainPage", "com.tallymarks.z_fiori_test.view.mainPage");
    this.app.addPage(master, true);
//    master.getController().nav = this.getController();

    // load the empty page
//     var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty");
//     this.app.addPage(empty, false);

    // wrap app with shell
    return new sap.m.Shell("Shell", {
      title : "{i18n>ShellTitle}",
      showLogout : false,
      app : this.app
    });
  }
});