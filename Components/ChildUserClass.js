import { Component } from "react";

class ChildUserClass extends Component{
    constructor(props){
        super(props)
        console.log(this.props.name+" Child Constructor")
    }


    componentDidMount(){
        console.log(this.props.name+" Child componet did mount")
    }

    render(){
        console.log(this.props.name+" Child render")
        return(
            <div>
                <h3>{this.props.name+" "} Child Componet</h3>
            </div>
        )
    }
}
export default ChildUserClass;