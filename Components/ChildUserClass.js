import { Component } from "react";

class ChildUserClass extends Component{
    constructor(props){
        super(props)
        console.log("Child Constructor")
    }


    componentDidMount(){
        console.log("Child componet did mount")
    }

    render(){
        console.log("Child render")
        return(
            <div>
                <h3>Child Componet</h3>
            </div>
        )
    }
}
export default ChildUserClass;