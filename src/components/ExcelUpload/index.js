import React, { Component } from 'react'
import "./styles.css"

class ExcelUpload extends Component {
    constructor(props){
		super(props)
            this.state = {
                
            }
    }

    render() {
		return (
            <div className="excel-upload-container">
                <form>
                    <input
                        className="excel-upload-input"
                        type= "file"
                        accept= ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        id="inputexcel"
                        placeholder="Search for..."
                        onChange={this.props.handleInputChange}
                    />
                </form>
            </div>
		)
	}
}
export default ExcelUpload