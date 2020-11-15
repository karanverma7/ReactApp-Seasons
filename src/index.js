import React from 'react'
import ReactDOM from 'react-dom'
import Loader from './loader'
import SeasonDisplay from './seasonDisplay'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    handler() {
        if( !this.state.lat && this.state.errorMessage ){
            return <div>Error: { this.state.errorMessage }</div>
        }
        if( this.state.lat && !this.state.errorMessage ){
            return <SeasonDisplay lat={ this.state.lat }/>
        }
    
        return (
            <Loader message="Please Allow Location Access" />
        )
    }

    render () {
        return <div>{ this.handler() }</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))