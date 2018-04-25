import React from 'react'
import Subject from './Subject'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {

  render () {
    console.log('ListPage - render - environment', this.props.relay.environment);
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.viewer.subjects.edges.map(({node}) =>
            <Subject key={node.id} post={node} viewer={this.props.viewer} />
          )}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    ...Subject_viewer
    subjects(last: 100) @connection(key: "ListPage_subjects", filters: []) {
      edges {
        node {
          id
          pictureUrl
          ...Subject_subject
        }
      }
    }
  }
`)
