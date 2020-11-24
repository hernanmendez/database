import { Component } from 'react';
import Table from '../components/Table'
import config from '../config'

class Lyrics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }

        this.call = this.call.bind(this)
    }

    call(parameter) {
        fetch(config.prod.server_url + "lyrics/" + parameter)
            .then(res => res.json())
            .then(data => {
                this.setState({ results: data })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.call(this.props.match.params.id)
        //this.call(this.props.match)
    }
    // https://stackoverflow.com/questions/14948223/how-to-convert-n-to-html-line-break
    render() {
        return (
            <div>
                <h1>{this.state.results.length > 0 ? this.state.results[0].song + " by " + this.state.results[0].artist : 'loading'}</h1>
                <p className="p">{this.state.results.length > 0 ? this.state.results[0].lyrics.replace(/\r?\n|\r/g, `
                `) : ''}</p>
            </div>
        );
    }
}

export default Lyrics