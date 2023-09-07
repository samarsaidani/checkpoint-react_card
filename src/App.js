import Name from "./composent/Name";
import Price from "./composent/Price";
import Des from "./composent/Descreption";

import {elem} from "./composent/product"

import Card from 'react-bootstrap/Card';
import "./style/style.css"



function App() {
  const UserName = prompt("your Name :")
  return (
    <div>
   <div className="cartes"  >
      <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={elem.image} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Des/>
          
        </Card.Text>
        <Card.Text>
         <Price/>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
     </div>
    <div className="msg">
    <p>{ UserName ? <img src="https://t3.ftcdn.net/jpg/03/12/28/36/360_F_312283673_bkDjKO9BgZwU514iezivRW5fxtvQbmA3.jpg" alt="erreur"/>:"créer votre nom svp"}</p>
    </div>
   
    </div>
  );
}

export default App;












