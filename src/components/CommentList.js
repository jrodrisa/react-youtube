import React, {useState} from 'react'
import { Comment, Button, Form, Header } from 'semantic-ui-react'
import CommentItem from "./CommentItem"

const CommentExampleComment = () => {
  
  const [image, setImage] = useState("image.jpg")
  const [userName, setUserName] = useState('Username')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  function getUsername(){
    //TODO
  }

  function randomPicture(){
    //TODO
  }

  function getDate(){
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const date = mm + '/' + dd + '/' + yyyy

    return date
  }

  const handleSubmit = (event) => {
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
