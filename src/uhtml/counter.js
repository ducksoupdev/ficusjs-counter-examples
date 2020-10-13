import { render as uhtmlRenderer, html } from 'https://unpkg.com/uhtml?module'
import { createComponent } from 'https://unpkg.com/ficusjs@2.0.0/dist/component.js'

createComponent('my-counter', {
    renderer (what, where) {
        uhtmlRenderer(where, what)
    },
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
          <button onclick="${this.dec}">-</button>
          <span>${this.state.count}</span>
          <button onclick="${this.inc}">+</button>
        `
    }
})