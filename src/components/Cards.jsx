
const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div className="card" key={character.name}>
          <div className="card-body">
            <h5 className="card-title">Name: {character.name}</h5>
            <img className="card-img" src={`/public/img/${character.name}.jpg`} alt={character.name} />
            <p className="card-text">Height: {character.height}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards
