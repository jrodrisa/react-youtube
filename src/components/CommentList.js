import React, {useState} from 'react'
import { Comment, Button, Form, Header } from 'semantic-ui-react'
import CommentItem from "./CommentItem"
import image from "../style/image/cute.png"

const CommentExampleComment = () => {
  

  const userName = 'Username'
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  function getDate(){
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const date = mm + '/' + dd + '/' + yyyy

    return date
  }

  const handleSubmit = (event) => {
    if (content !== ""){
      const date = getDate()
      let newComment = {
        date: date,
        image: image,
        userName: userName,
        content:content
      }
   
     setComments([...comments, newComment])
     setContent('')
    }
      
  }

  return(
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Form onSubmit={handleSubmit}>
      <Form.TextArea onChange={(event) => setContent(event.target.value)} value = {content}/>
      <Button 
        content='Add Comment' 
        labelPosition='left' 
        icon='edit' 
        primary />
    </Form>

    <div>
      { comments.map((item, index) => {
        return <CommentItem 
          key={index}
          date = {item.date}
          image = {item.image}
          userName = {item.userName}
          content = {item.content}
        />
      })}
    </div>

  </Comment.Group>
)}

export default CommentExampleComment
