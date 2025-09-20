import Carrd from "./Carrd"
import image1 from './assets/Images/Shirts.jpg'
import image2 from './assets/Images/TShirts.jpeg'
import image3 from './assets/Images/WShirts.jpeg'
import './App.css'

function App(){
const produts = [
  {
    prodName:"Shirt",
    prodPrice:400,
    prodDesc:"This is mens Shirt",
    btnValue:"Add to Cart",
    image:image1
  },
  {
    prodName:"T-Shirt",
    prodPrice:200,
    prodDesc:"This is mens T-Shirt",
    btnValue:"Add to Cart",
    image:image2
  },
  {
    prodName:"Womens_Shirt",
    prodPrice:350,
    prodDesc:"This is mens Womens_Shirt",
    btnValue:"Add to Cart",
    image:image3
  }
]
  return (
    <div className="App" style={{background:"red"}}>
      {produts.map((item)=>(
        <Carrd {...item}/>
      ))}
    </div>
  )
}
export default App