import './Card.css'

export const Card = ( {render} ) => {
    return(
      <div key={render.id} className="card">

          <h1 className="imgTitle"> {render.name} </h1>
          <img className="imgCard" src={render.URL} alt="Lobo" />

      </div>
    )
  }