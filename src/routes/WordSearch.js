import { Component } from 'react';
import Table from '../components/Table'
import config from '../config'

class WordSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            query: ''
        }

        this.call = this.call.bind(this)
    }

    call(parameter) {
        const param = parameter ? parameter : "";
        fetch(config.prod.server_url + 'wordSearch/' + param)
            .then(res => res.json())
            .then(data => {
                this.setState({ results: data })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.call(this.props.match.params.wordSearch)
        //this.call(this.props.match)
    }

    render() {
        return (
            <div>
                <div className="searchbar">
                    <input value={this.state.query} onChange={e => this.setState({ query: e.target.value })} />
                    <button onClick={() => {
                        this.call(this.state.query)
                        this.props.history.push("/wordSearch/" + this.state.query)
                    }}>
                        Search
                    </button>
                </div>
                <Table data={this.state.results} cut={2} />
            </div>
        );
    }
}

export default WordSearch