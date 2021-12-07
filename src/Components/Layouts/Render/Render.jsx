import React from 'react'
import './Render.css'
import { lobos } from '../../../lobos'
import { Card } from '../../UI/RenderCard/Card'

export const Render = () => {
    return (
      
      <div className="divCard">
        {
          lobos.map(render => (
            <Card
              render = {render}
            />
          ))
        }
      </div>
    )
}