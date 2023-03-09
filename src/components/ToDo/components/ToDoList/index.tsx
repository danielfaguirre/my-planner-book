import { ToDoListItemType } from '../models'
import ToDoItem from '../ToDoItem'
import { toDosMock } from './mock'
import style from './style.module.css'

export type ToDoListType = {
  onCheck: (item: ToDoListItemType,  isChecked: boolean) => void
  onDelete: (item: ToDoListItemType) => void
}

const ToDoList = ({ onCheck, onDelete }: ToDoListType) => {
  return (
    <div className={style.cardBody}>
      {toDosMock.map((item, index) => (
        <ToDoItem onCheck={onCheck} onDelete={onDelete} key={index} item={item} />
      ))}
    </div>
  )
}

export default ToDoList