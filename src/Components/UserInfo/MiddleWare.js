
import cors from 'cors';
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
});
// function performSignIn() {

//     let headers = new Headers();
  
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
  
//     headers.append('Access-Control-Allow-Origin', 'http://localhost:3003');
//     headers.append('Access-Control-Allow-Credentials', 'true');
  
//     headers.append('GET', 'POST', 'OPTIONS');
//     fetch(  {
//         //mode: 'no-cors',
//         credentials: 'include',
//         method: 'POST',
//         headers: headers
//       })
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log('Authorization failed : ' + error.message));
  
// }
  
//     // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
  