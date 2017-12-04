import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
    return {zzz: state.zzz}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({zzz}, dispatch)
}

@connect (mapStateToProps, mapDispatchToProps)
export default class Zzz extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div>Component</div>
        )
    }
}
    

