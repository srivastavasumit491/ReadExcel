import React, { Component } from 'react'
import "./styles.css"

class DataTable extends Component {
	constructor(props){
		super(props)
            this.state = {
                
            }
    }
    
    render() {
		return (
            <table className="table">
                <tbody>{this.props.dataList.map(function(item, key) {
                    return (
                        <tr key = {key}>
                            <td>{item.cell0}</td>
                            <td>{item.cell1}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
	}
}
export default DataTable