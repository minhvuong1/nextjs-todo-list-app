import React from 'react';
import Todo from './Todo';
import styles from '../styles/TodoList.module.css';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className={ todos.length >= 1 ? styles.todoContainer: ''}>
            <ul className={styles.todoList}>
                {filteredTodos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            text={todo.text} 
                            setTodos={setTodos} 
                            todos={todos}
                            todo={todo}
                        />
                    )) }
            </ul>
        </div>
    );
}

export default TodoList;