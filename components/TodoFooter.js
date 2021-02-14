import React from 'react';
import styles from '../styles/TodoFooter.module.css'

const TodoFooter = ({ numOfItemsRemaining, status, setStatus, setTodos, todos, numOfItemsCompleted }) => {
    const clearCompletedHandler = () => {
        setTodos(todos.filter(todo => todo.completed === false));
    }

    return (
        <div className={styles.formFooter}>
            <span>{numOfItemsRemaining} item left</span>
            <div className={styles.todoToggles}>
                <a className={status === 'all' ? styles.status : ''} onClick={e => setStatus('all')}>All</a>
                <a className={status === 'active' ? styles.status : ''} onClick={e => setStatus('active')}>Active</a>
                <a className={status === 'completed' ? styles.status : ''} onClick={e => setStatus('completed')}>Completed</a>
            </div>
            {
                numOfItemsCompleted >= 1 ? <span onClick={clearCompletedHandler} className={styles.clearCompleted}>Clear completed</span> : ''
            }
        </div>
    );
}

export default TodoFooter;