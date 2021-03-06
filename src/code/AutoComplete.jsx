import React from 'react'

import {getUiString} from './astValidator'

var AutoComplete = React.createClass({

    render(){
        var rows = this.props.options
            .map( (option) => {
                var handleClick = (e) => {
                    prevent(e)
                    this.props.onAutocompleteClick(option)
                }
                return (
                    <div onClick={handleClick} onMouseDown={prevent} key={option}
                    className={this.props.tentative === option ? 'auto-complete-row active' : 'auto-complete-row'}
                    >{getUiString(option)}</div>
                )
            })
        return (
        <div className="auto-complete-holder">
            <div className="auto-complete-list">
                {rows}
            </div>
        </div>
        )
    }
})

export default AutoComplete

function prevent(e){
    e.preventDefault();
    e.stopPropagation();
}