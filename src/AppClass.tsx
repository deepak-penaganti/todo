import { Component } from "react";

declare type AppClassState = {
    todosListDone: Array<string>,
    inputValue: string,
    todosList: Array<string>,
    name?: string;
}

export class AppClass extends Component {
    state: AppClassState = {
        todosListDone: [],
        inputValue: '',
        todosList: [],
    };

    render() {
        return <main>
            <h1>New To-Do App</h1>
            <input value={this.state.inputValue} onChange={(changeEvent) => {
                // Calling change of value on change of input
                this.setState({ inputValue: changeEvent.target.value });
            }} />
            <button onClick={() => {
                // Every click of button saves the new todo
                let isDuplicate = false;
                for (let index = 0; index < this.state.todosList.length; index++) {
                    const currentElement = this.state.todosList[index];
                    if (currentElement.toUpperCase().trim() === this.state.inputValue.toUpperCase().trim()) {
                        isDuplicate = true;
                        break;
                    }
                }

                if (isDuplicate === true) {
                    alert('To do already exists. So not adding');
                }

                if (this.state.inputValue !== undefined && this.state.inputValue !== '' && isDuplicate !== true) {
                    let tempList = this.state.todosList;
                    tempList.push(this.state.inputValue);
                    this.setState({ todosList: tempList });
                }
                this.setState({ inputValue: '' });
            }
            }>Save</button>
            {this.state.todosList.length === 0 ? <h3>Good to start something today</h3> : undefined}
            {this.state.todosList.length === 1 ? <h3>Great start!!! Kudos</h3> : undefined}
            {this.state.todosList.length === 2 ? <h3>Awesome streak!!! Make it hat trick</h3> : undefined}
            <h6>Pending</h6>
            <ol>
                {
                    this.state.todosList.map((item, index) => {
                        return <li onClick={() => {


                            const remainingTodoList = [];
                            for (let itemIndex = 0; itemIndex < this.state.todosList.length; itemIndex++) {
                                const currentElement = this.state.todosList[itemIndex];

                                if (currentElement !== item) {
                                    remainingTodoList.push(currentElement);
                                }
                            }
                            // saveTodosList(remainingTodoList);

                            const newTodoListDone = this.state.todosListDone;
                            newTodoListDone.push(item);

                            this.setState({ todosList: remainingTodoList, todosListDone: newTodoListDone });
                            // saveTodosListDone(newTodoListDone);

                        }} key={item + index}>{item}</li>;
                    })
                }
            </ol>
            <h6>Done</h6>
            <ul>
                {
                    this.state.todosListDone.map((item) => {
                        return <li onClick={() => {
                            const remainingTodoListDone = [];
                            for (let itemIndex = 0; itemIndex < this.state.todosListDone.length; itemIndex++) {
                                const currentElement = this.state.todosListDone[itemIndex];

                                if (currentElement !== item) {
                                    remainingTodoListDone.push(currentElement);
                                }
                            }
                            this.setState({ todosListDone: remainingTodoListDone });
                            // saveTodosListDone(remainingTodoListDone)
                        }}>{item}</li>
                    })
                }
            </ul>
            {this.state.todosListDone.length === 0 ? <h3>Clear skies above again!!!</h3> : undefined}
        </main>;
    }
}