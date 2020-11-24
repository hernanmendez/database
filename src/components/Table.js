import { Link } from 'react-router-dom'

function Table(props) {
    let keys;
    if(props.data.length > 0) {
        keys = Object.keys(props.data[0]);
        if(props.cut ) keys.splice(keys.length - props.cut);
    }

    return (
        <table className="table-comp">
            <tr>
                {
                    props.data.length > 0 &&
                    keys.map(val => {
                        return <th key={"table"+val}>{val}</th>
                    })
                }
            </tr>
            {
                props.data.map(row => {
                    return (
                        <tr>
                            {
                                keys.concat().map((col,i) => {
                                    if(col == 'song') {
                                        return <td key={"table"+i}><Link to={"/lyrics/" + row.id}>{row[col]}</Link></td>
                                    }
                                    if(col == 'artist') {
                                        return <td key={"table"+i}><Link to={"/artist/" + row.artist}>{row[col]}</Link></td>
                                    }
                                    return <td key={"table"+i}>{row[col]}</td>
                                })
                            }
                        </tr>
                    );
                })
            }
        </table>
    )

}

export default Table