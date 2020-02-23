async function getToken()
{
    axios.post('https://oauth2.googleapis.com/token', {
        code:'4%2FwgGNrs3WLIp550cRsEBAGexW97BDRHTUaHc7cA1PoedUfzIVc3WpwM7PyESaKFn3CzIbTrMg7Sx5nawZz2pZXk0',
        client_id:'817714937779-vjtvcksvfh1mgskk3h82mjchossb34sh.apps.googleusercontent.com',
        client_secret:'mQzi6Oym5hAdkDNkMMuQyU2r',
        redirect_uri:'http%3A//localhost:8000',
        grant_type:"authorization_code"
    }, 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
}
 function getToken1()
  {
      const userAction = async () => {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        body: {
          code:'4%2FwgGNrs3WLIp550cRsEBAGexW97BDRHTUaHc7cA1PoedUfzIVc3WpwM7PyESaKFn3CzIbTrMg7Sx5nawZz2pZXk0',
          client_id:'817714937779-vjtvcksvfh1mgskk3h82mjchossb34sh.apps.googleusercontent.com',
          client_secret:'mQzi6Oym5hAdkDNkMMuQyU2r',
          redirect_uri:'http%3A//localhost:8000',
          access_type:'offline',
          grant_type:'password'
        }, // string or object
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
      alert(8);
      console.log(myJson);
      }
  }
