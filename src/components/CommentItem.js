import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentItem = (props) => {

return (
  <div>
      <Comment>
      <Comment.Avatar src={props.image} />
      <Comment.Content>
        <Comment.Author as='a'>{props.userName}</Comment.Author>
        <Comment.Metadata>
          <div>{props.date}</div>
        </Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>
    </div>
)

}

export default CommentItem
