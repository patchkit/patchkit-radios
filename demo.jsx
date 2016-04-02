import React from 'react'
import Radios from './index'

export default class RadiosDemo extends React.Component {
  render() {
    const opts = [
      { label: 'First Item', value: 1 },
      { label: 'Second Item', value: 2 },
      { label: 'Third Item', value: 3, defaultChecked: true }
    ]
    const onChange = opt => { console.log('selected', opt) }
    return <div>
      <h1>patchkit-radios</h1>
      <section className="radios">
        <header>&lt;Radios group="example" options=[&#123; label:, value: &#125;, ...]&gt;</header>
        <div className="content">
          <Radios className="radios-example" group="example" options={opts} onChange={onChange} />
        </div>
      </section>
    </div>
  }
}