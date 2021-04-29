const header = (props) => {
  return (
    <div>
      <div className="text-center">
        <div className="container">
          <h3 className="heading display-4"><span class="iconify" data-icon="openmoji:clinking-beer-mugs" data-inline="false" data-width="75" data-height="75"></span>Brewery Wiki<span class="iconify" data-icon="openmoji:clinking-beer-mugs" data-inline="false" data-width="75" data-height="75"></span></h3>

        </div>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default header;