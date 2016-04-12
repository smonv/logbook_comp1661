function onDeviceReady(){
    $('a#ring').on('click', function (e) {
        e.preventDefault();
        navigator.notification.beep(1);
        navigator.notification.alert(
            'Bell ringing',
            'Notification',
            'Done'
        );
    });

    $('a#vibrate').on('click', function (e) {
        e.preventDefault();
        navigator.notification.vibrate(2000);
        navigator.notification.alert(
            'Vibrated.',
            'Notification',
            'Done'
        );
    });
    $('a#network').on('click',function (e) {
        e.preventDefault();
        var status = checkNetwork(navigator.network.connection.type);
        console.log(status);
        $('p#network-display').text(status);
    })
}

function checkNetwork(type){
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    return states[type];
}
