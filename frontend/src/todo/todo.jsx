import React, {Component} from "react";
import PageHeader from "../template/pageHeader";
import Todo from './todo';


export default class Todo extends Component {
    render() {
        return (

            <div>
                {/* <PageHeader name='Tarefas' small='cadastro'></PageHeader> */}
                <h1>Todo</h1>
            </div>
        )
    }
}