import React, { Component } from 'react';
import FunctionClick, { ParentComponent } from './ParentComponent';

class ComplexList extends Component {
    constructor(props) {
        super(props);
        this.arr2 = [];

        this.state = {
            list: [
                {

                    day: 'Monday Morning',
                    name: 'Peter'
                },
                {
                    id: '1',
                    day: 'Monday Evening',
                    name: 'Jodi'
                },
                {
                    id: '2',
                    day: 'Tue Morning',
                    name: 'Alexis'
                },
                {
                    id: '3',
                    day: 'Tue Evening',
                    name: 'Will'
                },
                {
                    id: '4',
                    day: 'wed Morning',
                    name: 'Frank'
                },
                {
                    id: '5',
                    day: 'wed Evening',
                    name: 'Peter'
                },

                {
                    id: '6',
                    day: 'Thu Morning',
                    name: 'Jodi'
                },

                {
                    id: '7',
                    day: 'Thu Evening',
                    name: 'Alex'
                },
                {
                    id: '8',
                    day: 'Fri Morning',
                    name: 'Will'
                },
                {
                    id: '9',
                    day: 'Fri Evening',
                    name: 'Frank'
                },

            ],

        };
        for (let i in this.state.list) {
            this.arr2.push(this.state.list[i].name)

        }

        // this.state.arr=this.arr2

    }

    Check = (personName) => {
        if (personName == this.arr2[this.arr2.length - 1]) {
            let len = this.arr2.length - 1
            let temp = this.arr2[0]
            this.arr2[0] = this.arr2[len]
            this.arr2[len] = temp;
            this.forceUpdate();
            //  this.setState=({
            //         arr:this.arr2
            //     })
            //     console.log(this.state.arr)
        }
        else {

            this.arr2 = this.arr2.filter(i => i !== personName)
            this.arr2.push(personName)
            //   this.setState=({
            //       arr:this.arr2
            //   })
            this.forceUpdate();
        }
    }
    //change = () => {
      //  this.setstate = ({
        //    text: "b"
        //})
   // }

    render() {

        console.log(this.arr2)
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={item.day}>
                            <div>
                                {item.day} <h1 >{this.arr2[index]}</h1> <ParentComponent person={this.arr2[index]} prop2={this.Check}></ParentComponent>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }



}
export default ComplexList;



