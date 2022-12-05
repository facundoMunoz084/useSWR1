import './App.css';
import ListaPerros from './components/ListaPerros';
import Card from './components/Card';
import { useState , useEffect } from 'react';
import getDog from './hooks/getDog';

const initialDog = {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YG24rg_fHmDvqIFWBfA5gsQPLEimBRcQxU-APY7t6CqI9zSb0T6cBmBK8jGPUgTdZXE&usqp=CAU",
  breed: {
    id: 1, 
    name: "Labrador"
  }
}


function App() {
  const [dog, setDog] = useState(initialDog)

  
  useEffect(() => {
    updateDog();
  }, []);
  
  const updateDog = () => {
    getDog()
      .then((newDog) => {
        //setDog(newDog);
      
    })
  }

  return (
    <div >
      <ListaPerros />
      <Card dog={dog} />
    </div>
  );
}

export default App;