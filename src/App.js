// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'
import Table from './Components/Table'
// import Button from './Components/Button'
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "./fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
// import "./fonts/font-awesome-5.15.2/css/fontawesome.min.css"

class App extends Component {
    state = {
        formData : {
            name:"",
            emp_id:"",
            dept:"",
            email:"",
            doj:""
        },

        tableData:[],

        showForm : false,
        formSubmit: false,
        showButton: true

    }

    setValue = (e)=>{
        this.setState({
            formData : {...this.state.formData,[e.target.name] : e.target.value}
        })
    }

    openFormHandler = (e) => {
        // console.log(e);
        e.preventDefault();
        const openForm = this.state.showForm;
        this.setState({showForm: !openForm, formSubmit: false, showButton:false});
    }

    formCloseHandler = () => {
        this.setState({showForm: false, showButton: true, formSubmit: true});
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        // const prevState = this.state.formSubmit;
        this.setState({formSubmit: true, showForm: false, showButton:true})

        var data = this.state.tableData;
        var obj  = {
            name : this.state.formData.name,
            emp_id:this.state.formData.emp_id,
            dept:this.state.formData.dept,
            email:this.state.formData.email,
            doj:this.state.formData.doj,
        }
        data.push(obj);
        this.setState({
            tableData:data,
        },()=>{
            this.formClearHandler(e);
        });
    }

    formClearHandler = (e) => {
        e.preventDefault();
        this.setState({
        formData:{
               name:"",
               emp_id:"",
               dept:"",
               email:"",
               doj:""
        }
        })
    }

    deleteRow = (emp_id)=>{
        var newData = this.state.tableData.filter(data=>{
            return data.emp_id !== emp_id
        })

        this.setState({
            tableData:newData
        })
    }

    render(){

        // const styleButton = {
        //     backgroundColor: 'rgba(255,255,255,1)',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px 15px',
        //     cursor: 'pointer',
        //     margin: '30px',
        //     fontSize: '18px'
        // };

        return (
            <div className="App">
                {this.state.showButton ?
                    <div>
                    <button className="contact100-btn-show" onClick={this.openFormHandler}>
            			<i className="fa fa-user-plus" /*aria-hidden="true" onClick={this.openFormHandler}*/></i>
            		</button>
                    </div> : null
                }
                {this.state.showForm ?
                    <Form setValue={this.setValue} formData = {this.state.formData} clickedSubmit={this.formSubmitHandler} clickedClear={this.formClearHandler} closeForm={this.formCloseHandler}/> : null
                }
                {(this.state.formSubmit && this.state.tableData.length>0) ?
                    <Table formData = {this.state.tableData} deleteRow = {this.deleteRow}/> : null
                }
            </div>
        );
    }
}

export default App;
