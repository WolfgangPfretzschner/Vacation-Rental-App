import React, { Component } from 'react'
import PropertiesList from './PropertiesList'

export default class PropertiesSidebar extends Component {
   constructor(props) {
      super(props)
   }

   render() {

      return (
         <div >
            <PropertiesList />
         </div>
      )
   }
}
