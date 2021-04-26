const header = (props) => {
  return (
    <div>
      <div className="text-center">
        <div className="container">
          <h3 className="heading display-4">Brewery Wiki</h3>
        </div>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default header;