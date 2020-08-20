import React, {Component} from 'react'
import classNames  from 'classnames'
import './TrafficLight.css'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class TrafficLight extends Component{
    render(){
        const {currentColor} = this.props;
        return(
            <div className='traffic-light'>
                <div className={classNames('red',{active: currentColor === RED})}></div>
                <div className={classNames('orange',{active: currentColor === ORANGE})}></div>
                <div className={classNames('green',{active: currentColor === GREEN})}></div>
            </div>
        )
    }
}
export default TrafficLight