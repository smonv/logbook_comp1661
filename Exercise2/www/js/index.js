function onDeviceReady() {
    $('form').on('submit', function (e) {
        console.log('submitted');
        e.preventDefault();
        var name = $('#name').val();
        var location = $('#location').val();
        var date = $('#date').val();
        var time = $('#time').val();
        var organizer = $('#organizer').val();
        var event = {
            name: name,
            location: location,
            date: date,
            time: time,
            organizer: organizer
        };

        validateEvent(event, function (errors) {
            if(errors.length > 0){
                navigator.notification.alert(errors.join("\n"), null, 'Errors', 'Dismiss');
            }
        })

    });
}

function validateEvent(event, callback) {
    var err = [];
    if (event.name == "") {
        err.push("Event name is required!");
    }
    if (event.date == "") {
        err.push("Event date is required!");
    }
    if (event.organizer == "") {
        err.push("Event organizer is required!");
    }
    callback(err);
}