/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["learning/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
