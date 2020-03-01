# calendar-api-create-event
#1- to get code https://developers.google.com/identity/protocols/OAuth2WebServer#handlingresponse 
#<!-- https://accounts.google.com/o/oauth2/v2/auth?
 #scope=https%3A//www.googleapis.com/auth/calendar&
 #access_type=offline&
 #include_granted_scopes=true&
 #response_type=code&
 #redirect_uri=http%3A//localhost:8000&
 #client_id={CLINT_ID}
 #will return code
 #2- use code that recived from #1 to get token to get access token use this api https://developers.google.com/identity/protocols/OAuth2WebServer#exchange-authorization-code

 #3-may use implicit type to get token like this
 #https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/calendar&response_type=token&redirect_uri=http%3A//localhost:8000&
#client_id=<ur-client-id>

 #3- install npm i axios