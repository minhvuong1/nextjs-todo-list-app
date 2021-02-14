import React from 'react';
import styles from '../styles/TodoList.module.css'

const Todo = ({text, id, todos, setTodos, todo}) => {
    const deleteHandler = () => {        
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
            <li className={styles.todoItem} key={id}>
                    <div className={`${styles.round} ${todo.completed ? styles.roundCompleted : ''}`}>
                        <input type="checkbox" />
                        <label onClick={completeHandler} htmlFor="checkbox"></label>
                    </div>
                    <div className={styles.textAndDeleteContainer}>
                        <div contentEditable="true" className={`${styles.todoItemText} ${todo.completed ? styles.completed : ""}`}>
                            {text}
                        </div>
                        <span className={styles.deleteButton} onClick={deleteHandler}><i className="fa fa-times" aria-hidden="true"></i></span>
                    </div>
            </li>
    )
}

export default Todo;