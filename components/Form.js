import React from 'react'
import styles from '../styles/Form.module.css'

function TodoForm({ todos, setTodos, setUserInput, userInput, numOfItemsCompleted }) {
    const inputTextHandler = (e) => {
        e.preventDefault()
        setUserInput(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (userInput.length > 0) {
            setTodos([
                ...todos, {text: userInput, completed: false, id: Math.random() * 1000}
            ])
        }
        setUserInput('');
    }

    const selectAllHandler = (e) => {
        e.preventDefault();
        if (numOfItemsCompleted === todos.length) {
            setTodos(todos.map(todo => ({ ...todo, completed: false })))
        } else {
            setTodos(todos.map(todo => ({ ...todo, completed: true })))
        }
    }

    return (
        <form className={styles.formContainer} onSubmit={submitTodoHandler}>
            <div onClick={selectAllHandler} className={styles.selectAllBtn}>
                <i className="fa fa-angle-down"></i>
            </div>
                <input 
                    className={styles.newTodo} 
                    type="text" 
                    placeholder="What needs to be done?"
                    onChange={inputTextHandler}
                    value={userInput}
                />
        </form>
    )
}

export default TodoForm
