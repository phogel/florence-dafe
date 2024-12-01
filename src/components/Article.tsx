import React from "react"
import { Title } from "./Title"

export const Article = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  )
}