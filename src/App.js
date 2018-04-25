import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './relay-environment'
import ListPage from './ListPage'

const AppSubjectsQuery = graphql`
  query AppSubjectsQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={AppSubjectsQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <ListPage viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default App
