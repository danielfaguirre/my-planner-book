import { PlusOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { useState } from 'react'
import style from './style.module.css'

export type NewToDoFormType = {
  onAddNewToDo: (toDo: string) => void
}

const NewToDoForm = ({ onAddNewToDo }: NewToDoFormType) => {
  const [toDo, setToDo] = useState<string>('')
  return (
    <Input.Group compact className={style.addForm} >
      <Input onChange={(e) => setToDo(e.target.value)} placeholder="Add new To do here..." type="text" />
      <Button onClick={() => onAddNewToDo(toDo)} type="primary" icon={<PlusOutlined />} />
    </Input.Group>
  )
}

export default NewToDoForm
