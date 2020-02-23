function displayDetails()
{
  var token = '';
  const userAction = async () => {
  const response = await fetch('https://www.googleapis.com/auth/calendar/v3/calendars/primary/events/'+getEventId(), {
  method: 'GET',
  body: {}, // string or object
  headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': 'Bearer'+token
  }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
   document.getElementById('details').innerHTML=myJson;
  }
}