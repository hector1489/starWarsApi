const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div className="card" key={character.name}>
          <div className="card-body">
            <h5 className="card-title">Name: {character.name}</h5>
            <p className="card-text">heigth: {character.height}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards
