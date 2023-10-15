

function NavBar({ MenList, MenIndex, setMenIndex }) {
    const handleClick = () => {
      if (MenIndex < MenList.length - 1) setMenIndex(MenIndex + 1);
    };
    const lessClick = () => {
      if (MenIndex > 0) setMenIndex(MenIndex - 1);
    };
  
    return (
      <div>
       <button className = "styleButton" onClick={lessClick}>Précédent</button>
       <button className = "styleButton" onClick={handleClick}>Suivant</button>
      </div>
    );
  }
  
  export default NavBar;