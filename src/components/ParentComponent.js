import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Please go back and click on change button ?"

        }

        this.greetParent = this.greetParent.bind(this)

    }



    greetParent() {
        alert(`${this.state.parentName}`)
    }


    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} getName={this.props.prop2} getVal={this.props.person} />


            </div>
        )
    }
}

export default ParentComponent

