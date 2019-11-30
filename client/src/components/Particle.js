import React, {Component} from 'react'
import Particles from 'react-particles-js'


class ParticlesBackground extends Component {

    render() {
    return (
        <Particles
            canvasClassName='particles-canvas'
            params={{
            number: {
                value: 800,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            polygon: {
                   scale: 2,
                   draw: {
                       stroke: {
                           width: 2
                       }
                   }
               }
        }}
                />
    )
} 
}
export default ParticlesBackground