/**
 *  delete Event button click.
 */
function handleDeleteEventClick(eventId)
{
    var event = gapi.client.calendar.events.delete({
        "calendarId": 'primary', 
        "eventId": eventId
    }).execute();
    window.location.reload();
 }