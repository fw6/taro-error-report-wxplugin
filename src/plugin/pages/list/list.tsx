import React, { Component } from 'react'
import { Button, View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.scss'

export default class Index extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  render () {
    return (
      <View>
        <Button>Click me</Button>

        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
