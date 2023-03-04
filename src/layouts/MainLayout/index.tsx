import { ReactNode } from "react"

export type MainLayoutType ={
  children: ReactNode
}

const MainLayout = ({children}: MainLayoutType) => {
  return (
    <div>{children}</div>
  )
}

export default MainLayout
