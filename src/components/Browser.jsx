const Browser = ({ endSearch, onChange }) => {

  return (
    <div>
      <h5>Search:</h5>
      <input type="text" value={endSearch} onChange={onChange} />
    </div>
  )
}

export default Browser
