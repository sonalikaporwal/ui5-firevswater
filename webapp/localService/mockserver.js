sap.ui.define(['sap/ui/core/util/MockServer'], function (MockServer) {
  'use strict';
  return {
    init: function () {
      // create
      var oMockServer = new MockServer({
        rootUri: '', // rootUri and manifest dataSource uri should be same
      });
      var oUriParameters = jQuery.sap.getUriParameters();
      // configure
      MockServer.config({
        autoRespond: true,
        autoRespondAfter: oUriParameters.get('serverDelay') || 1000,
      });
      // simulate
      var sPath = jQuery.sap.getModulePath('integrtr.ui5firevswater.localService');
      oMockServer.simulate(sPath + '/metadata.xml', sPath + '/mockdata');
      // start
      oMockServer.start();
    },
  };
});
