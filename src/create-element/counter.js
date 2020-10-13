import { createComponent } from 'https://unpkg.com/ficusjs@2.0.0/dist/component.js'

function renderer (what, where) {
    while (where.firstChild) where.removeChild(where.firstChild)
    const element = document.createElement('div')
    element.innerHTML = what
    where.appendChild(element)
}

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
    mounted () {
        this.setupEvents()
    },
    updated () {
        this.setupEvents()
    },
    removed () {
        this.cleanupEvents()
    },
    cleanupEvents () {
        this.querySelector('.btn-dec').removeEventListener('click', this.dec)
        this.querySelector('.btn-inc').removeEventListener('click', this.inc)
    },
    setupEvents () {
        this.querySelector('.btn-dec').addEventListener('click', this.dec)
        this.querySelector('.btn-inc').addEventListener('click', this.inc)
    },
    render () {
        return `
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
          <button class="btn-dec">-</button>
          <span>${this.state.count}</span>
          <button class="btn-inc">+</button>
        `
    }
})