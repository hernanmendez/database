import { Component } from 'react';
import Table from '../components/Table'
import config from '../config'

class SongSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }

        this.call = this.call.bind(this)
    }

    call(parameter) {
        fetch(config.prod.server_url + "artist/" + parameter)
            .then(res => res.json())
            .then(data => {
                this.setState({ results: data })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.call(this.props.match.params.artist)
    }

    render() {
        return (
            <div>
                <h1>{this.state.results.length > 0 ? this.state.results[0].artist + "'s Songs" : 'loading'}</h1>
                <Table data={this.state.results} cut={3} />
            </div>
        );
    }
}

export default SongSearch