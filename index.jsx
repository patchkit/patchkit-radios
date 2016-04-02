import React from 'react'

export default class Radios extends React.Component {
  render () {
    return <div className={this.props.className}>
      { this.props.options.map((option, i) => {
        return (
          <label key={'option'+i}>
            <input type="radio"
              name={this.props.group} 
              value={option.value} 
              defaultChecked={option.defaultChecked}
              onChange={()=>this.props.onChange(option)} />
            {option.label}
          </label>
        )
      }) }
    </div>
  }
}