import React from "react";
import { simpleAdd, simpleSub } from '../redux_actions';
import { connect } from "react-redux";

const Example = (props) => {
    return (
        <div style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            color: 'white'
        }}>            
            <button onClick={(event) => props.simpleAdd(1)}>Add 1</button>
            <button onClick={(event) => props.simpleSub(1)}>Subtract 1</button>
            <pre>
                {props.simpleReducer.count}
                <br/>
                {
                    JSON.stringify(props)
                }
            </pre>
        </div>        
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({    
    simpleAdd: amount => dispatch(simpleAdd(amount)),
    simpleSub: amount => dispatch(simpleSub(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);