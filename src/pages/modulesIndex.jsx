import React,{Component} from 'react'
import LeftDrawer from '.././containers/modulesList.jsx'

export default class ModuleIndex extends Component{
  render(){
    console.log('mondule index call');
    return(
      <div>
        <LeftDrawer />
      </div>
    )
  }
}