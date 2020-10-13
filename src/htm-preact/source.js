import { render as renderer, html } from 'htm/preact/standalone.module'
import { createComponent } from 'ficusjs/dist/component'

createComponent('my-counter', {
    renderer,
    state () {
        return { count: 0 }
    },
    dec () {
        this.state.count = this.state.count - 1
    },
    inc () {
        this.state.count = this.state.count + 1
    },
    render () {
        return html`
          <style>
              span {
                width: 4rem;
                display: inline-block;
                text-align: center;
                font-size: 200%;
              }
        
              button {
                width: 64px;
                height: 64px;
                border: none;
                border-radius: 10px;
                background-color: seagreen;
                color: white;
                font-size: 200%;
              }
          </style>
          <button onClick="${this.dec}">-</button>
          <span>${this.state.count}</span>
          <button onClick="${this.inc}">+</button>
        `
    }
})