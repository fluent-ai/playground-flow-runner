#!/usr/bin/env node
import { createNanoEvents, Emitter } from 'nanoevents'

// console.log(`Loaded ${nodes.length} nodes and ${edges.length} edges!`)

interface Events {
  start: (startedAt: number) => void
}

class Ticker {
  emitter: Emitter

  constructor() {
    this.emitter = createNanoEvents<Events>()
  }

  on<E extends keyof Events>(event: E, callback: Events[E]) {
    return this.emitter.on(event, callback)
  }
}

const ticker = new Ticker()
