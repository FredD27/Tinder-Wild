import { useState } from 'react'
import './App.css';
import ProfilCard from './components/ProfilCard';
import NavBar from './components/NavBar';
import './style/App.css';

const MenList = [
  {
    name : "Mathieu AMORA",
    age : "33 ans",
    image : 'src/assets/IMG_0014.jpg',
    hobbies : "J'aime les séries tv, le jetlag, et faire à manger pour ma femme.",
  },
  {
    name : "Raphael LESSIEUR",
    age : "26 ans",
    image : 'src/assets/IMG_0017.jpg',
    hobbies : "J'aime les films romantiques, le backgammon, et manger des barres céréales.",
  },
  {
    name : "David MARIE",
    age : "48 ans",
    image : 'src/assets/IMG_0038.jpg',
    hobbies : "J'aime la paléontologie, les pokemons, et faire du jujitsu. ",
  },
];
function App() {
 const[MenIndex, setMenIndex] = useState(0);
  return (
    
    <div>
      <div>
        <h1>TINDER WILD</h1>
        <NavBar 
        setMenIndex={setMenIndex} 
        MenIndex={MenIndex} 
        MenList={MenList}/>
      </div>
      <ProfilCard 
      profil={MenList[MenIndex]}/>
    </div>
  )
}

export default App
