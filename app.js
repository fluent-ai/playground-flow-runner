"use strict";
import "./banner.js";

import config from "./config.js";

// Dependencies
// const mqtt = require('mqtt')
import * as mqtt from "mqtt";

// Environment Config
const PROTOCOL = process.env.PROTOCOL || 'mqtt'
const BROKER = process.env.BROKER || '127.0.0.1:1883'
const USERNAME = process.env.USERNAME || ''
const PASSWORD = process.env.PASSWORD || ''

//// Mqtt Topics
const TOPIC_READY = process.env.TOPIC_READY || 'sequencePlayer/ready'
const TOPIC_DO_SEQUENCE = process.env.TOPIC_DO_SEQUENCE || 'sequencePlayer/doSequence'
const TOPIC_ABORT_SEQUENCE = process.env.TOPIC_ABORT_SEQUENCE || 'sequencePlayer/stop'
const TOPIC_LOG = process.env.TOPIC_LOG || 'sequencePlayer/log'

// Globals
const client = mqtt.connect(
  PROTOCOL + '://' + BROKER,
  {
   // username: USERNAME,
   // password: PASSWORD,
    will: {
      topic: TOPIC_READY,
      payload: '0',
      retain: true,
    },
  clientId: 'sequencePlayer'+ Math.random().toString(16).substr(2, 8)
  }
)
let state = undefined
let sequenceTopics = []
let sequence = undefined
let sequenceTimeout = undefined
let sequenceWaitTopic = undefined
let sequenceWaitPayload = undefined
let sequenceStep = 0
let doingSequence = false

// States
const stateReady = {
  onEnter: function() {
    client.subscribe(TOPIC_DO_SEQUENCE, (err, granted) => {
      logMqttSubscribe(err, granted)
      client.publish(TOPIC_READY, '1', { retain: true }, err => logMqttPublish(TOPIC_READY, '1', err))
    })
  },

  onMessage: function(topic, message) {
  },

  onExit: function() {},
}

const stateDoingSequence = {
  onEnter: function() {
  },

  doSequence: function() {
  },

  doStep: function(step) {
  },

  onMessage: function(topic, message) {
  },

  onExit: function() {
  },
}

// State handler
function setState(newState) {
  state && state.onExit && state.onExit()
  state = newState
  state && state.onEnter && state.onEnter()
}

// Mqtt callbacks
client.on('connect', () => setState(stateReady)) // start in the 'ready' state
client.on('message', (topic, message) => state.onMessage(topic, message))

// Logging
function logInfo(message) {
  console.info(message)
  client.publish(TOPIC_LOG, 'INFO:' + message)
}
function logWarn(message) {
  console.warn(message)
  client.publish(TOPIC_LOG, 'WARN:' + message)
}
function logError(message) {
  console.error(message)
  client.publish(TOPIC_LOG, 'ERR :' + message)
}
function logMqttSubscribe(error, granted) {
  if (error) {
    return logError(error)
  }
  granted.forEach(grant => {
    logInfo(`Subscribed to '${grant.topic}' with qos '${grant.qos}'`)
  })
}
function logMqttUnsubscribe(topic, error) {
  if (error) {
    return logError(error)
  }
  logInfo(`Unsubscribed from '${topic}'`)
}
function logMqttPublish(topic, message, error) {
  if (error) {
    return logError(error)
  }
  logInfo(`Published to '${topic}' message '${message}'`)
}

