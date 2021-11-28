import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * 1) Ability to add new todo - DONE
 * 2) Able to list the todos - DONE
 * 3) Able to mark complete
 * 4) Remove/delete the todo
 * 
 * @returns 
 */

function App(props: any) {
  // [current value, function to change value]
  const [inputValue, saveInputValue] = useState<string>('');
  
  const [todosList, saveTodosList] = useState<Array<string>>([]);
  
  const [todosListDone, saveTodosListDone] = useState<Array<string>>([]);

  // Never goes
  return (
    <main>
      <h1>To-Do App</h1>
      <input value={inputValue} onChange={function (changeEvent) {
        // Calling change of value on change of input
        saveInputValue(changeEvent.target.value);
      }} />
      <button onClick={function () {
        // Every click of button saves the new todo
        let isDuplicate = false;
        for (let index = 0; index < todosList.length; index++) {
          const currentElement = todosList[index];
          if (currentElement.toUpperCase().trim() === inputValue.toUpperCase().trim()) {
            isDuplicate = true;
            break;
          }
        }

        if (isDuplicate === true) {
          alert('To do already exists. So not adding');
        }

        if (inputValue !== undefined && inputValue !== '' && isDuplicate !== true) {
          let tempList = todosList;
          tempList.push(inputValue);
          saveTodosList(tempList);
        }

        saveInputValue('');
      }}>Save</button>
      {todosList.length === 0 ? <h3>Good to start something today</h3> : undefined}
      {todosList.length === 1 ? <h3>Great start!!! Kudos</h3> : undefined}
      {todosList.length === 2 ? <h3>Awesome streak!!! Make it hat trick</h3> : undefined}
      <h6>Pending</h6>
      <ol>
        {
          todosList.map(function (item, index) {
            return <li onClick={function() {

              /**
               * Remove from existing
               */
              const remainingTodoList = [];
              for (let itemIndex = 0; itemIndex < todosList.length; itemIndex++) {
                const currentElement = todosList[itemIndex];
                
                if (currentElement !== item) {
                  remainingTodoList.push(currentElement);
                }
              }
              saveTodosList(remainingTodoList);

              /**
               * Add to done list 
               */
              const newTodoListDone = todosListDone;
              newTodoListDone.push(item);
              saveTodosListDone(newTodoListDone);

            }} key={item + index}>{item}</li>;
          })
        }
      </ol>
      <h6>Done</h6>
      <ul>
        {
          todosListDone.map(function(item) {
            return <li>{item}</li>
          })
        }
      </ul>
    </main>
  );
}

export default App;
