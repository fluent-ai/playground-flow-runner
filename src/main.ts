#!/usr/bin/env node
import './banner.js'
import { FlowRunner } from './FlowRunner.js'
import { nodes, edges } from './mockData.js'

const flowRunner = new FlowRunner()

flowRunner.sync({ nodes, edges })
flowRunner.executeFlow()
