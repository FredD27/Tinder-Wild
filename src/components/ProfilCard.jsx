

function ProfilCard ({profil}) {
    return (
        <div className="card">
            <h3> {profil.name} {profil.age}</h3>
            <img src={profil.image} alt={profil.name} className="cardImg"/>
            <p>{profil.hobbies}</p>
        </div>
    );
}

export default ProfilCard;