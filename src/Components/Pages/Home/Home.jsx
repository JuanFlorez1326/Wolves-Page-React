import './Home.css'
import { Fragment } from 'react'
import { Render } from '../../Layouts/Render/Render'
import { HeaderUi } from '../../UI/HeaderUI/HeaderUI'
import { FooterUI } from '../../UI/FooterUI/FooterUi'


export const Home = () =>
{
    return (
        <Fragment>
            <div>     
                <div className="divHeader">
                    <HeaderUi/>               
                </div>                 
                <div className="divRender">
                    <Render/>               
                </div>
                <div className="divfooter">
                    <FooterUI/>               
                </div>
            </div>
        </Fragment>
    )
}