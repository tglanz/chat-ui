import React from 'react';

export default (name, setterName, defaultValue, storageName) => Component => class extends React.PureComponent {

    constructor(props){
        super(props)

        this.state = {
            [name]: defaultValue
        };
    }

    componentWillMount(){
        // Restore the value from storage
        this.setState({
            [name]: JSON.parse(sessionStorage.getItem(name)) || defaultValue
        });
    }

    setPropValue(value){
        // Set the value in storage, first, then set our state and it'll update the child
        sessionStorage.setItem(name, JSON.stringify(value));
        this.setState({
            [name]: value
        })
    }

    render(){

        const childProps = {
            ...this.props,
            [name]: this.state[name],
            [setterName]: value => this.setPropValue(value)
        }

        return <Component {...childProps} />
            
    }
}