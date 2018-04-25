/* @flow */
import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Post extends React.Component<*, *, *> {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.pictureUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.subject.firstName} {this.props.subject.lastName}&nbsp;
          <span
            className='red f6 pointer dim'
            onClick={this._handleDelete}
          >Delete</span>
        </div>
      </div>
    )
  }

  _handleDelete = () => {
    // DeletePostMutation(this.props.post.id, this.props.viewer.user.id)
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Subject_viewer on Viewer {
    user {
      id
    }
  }
  fragment Subject_subject on Subject {
    id
    firstName
    lastName
    email
    pictureUrl
  }
`)
