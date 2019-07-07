import React, { Component } from 'react'
import ExcelUpload from '../../components/ExcelUpload'
import DataTable from '../../components/DataTable'
import readXlsxFile from 'read-excel-file'
import './styles.css'

class Main extends Component {
	constructor(props){
		super(props)
            this.state = {
                dataList:[]
            }
    }
    
    handleInputChange = event => {
        const input = event.target

        if(input.files[0]) {
            readXlsxFile(input.files[0]).then((rows) => {
                let dataList=[]
                for(let i=0; i<rows.length; ) {
                    let obj ={}
                    rows[i] = rows[i].slice(2)
                    rows[i] = rows[i].filter(Boolean)
                    for(let j=0; j<rows[i].length; j++) {
                        obj['cell'+j] = rows[i][j]
                    }
                    dataList.push(obj)
                    i=i+2
                }
                this.setState({
                    dataList
                });
            }, (error) => {
                console.log(error)
            })
        }
    };
	
	render() {
		return (
			<div className="Main">
				<ExcelUpload handleInputChange= {this.handleInputChange}/>
                <DataTable dataList={this.state.dataList}/>
			</div>
	    )
	}
}

export default Main