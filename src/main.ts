#!/usr/bin/env node
/* eslint-disable no-console */
import { FlowRunner } from './FlowRunner'
import { nodes, edges } from './mockData'

const flowRunner = new FlowRunner()

flowRunner.sync({ nodes, edges })
flowRunner.executeFlow()
