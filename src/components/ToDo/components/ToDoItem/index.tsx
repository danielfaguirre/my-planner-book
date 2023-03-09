import { CloseOutlined } from "@ant-design/icons"
import { Checkbox, Button } from "antd"
import { ToDoListItemType } from "../models"
import style from './style.module.css'

export type ToDoItemType = {
  item: ToDoListItemType
  onCheck: (item: ToDoListItemType,  isChecked: boolean) => void
  onDelete: (item: ToDoListItemType) => void
}

const ToDoItem = ({ item, onCheck, onDelete }: ToDoItemType) => {
  return (
    <div className={style.toDoItem}>
      <Checkbox onChange={(e) => onCheck(item, e.target.checked)}>{item.label}</Checkbox>
      <Button onClick={() => onDelete(item)} danger type="link" icon={<CloseOutlined />} />
    </div>
  )
}

export default ToDoItem
