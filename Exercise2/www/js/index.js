function onDeviceReady() {
    startApp();
}

function startApp() {
    var $$ = Dom7;

    var app = new Framework7({
        material: true,
        cache: false,
        modalTitle: 'madDiscovery',
        precompileTemplates: true,
        fastClicks: false,
        onAjaxStart: function () {
            app.showIndicator();
        },
        onAjaxComplete: function () {
            app.hideIndicator();
        }
    });

    var mainView = app.addView('.view-main', {});
    app.addNotification({
        hold: 3000,
        closeOnClick: true,
        message: "F7 ready"
    });
    app.onPageInit('index', function () {
        console.log("init index");
    });
}