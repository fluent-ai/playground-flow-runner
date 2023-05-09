"use strict";
import "./banner.js";
import {nodes, edges} from "./mockData.js";



function createGraph(nodes , edges)  {
    console.log('making a graph');
    
    const graph = new Map();
    nodes.forEach((node) => {
      graph.set(node.id, {
        node,
        incomingEdges: new Set(),
        outgoingEdges: new Set(),
      });
    });
    edges.forEach((edge) => {
      const { source, target } = edge;
      const sourceNode = graph.get(source);
      const targetNode = graph.get(target);
      sourceNode.outgoingEdges.add(edge);
      targetNode.incomingEdges.add(edge);
    });
    console.log({graph});
    
    return graph;
}

function runFlow(nodes, edges)  {
    console.log('ok! yea im the flow runner, ill run the flow, nice');
    
    const graph = createGraph(nodes, edges);
    const visited = new Set();

    function visit(nodeId) {
        console.log(`visiting ${nodeId}`);
        if (visited.has(nodeId)) {
            console.log('its the same node! returning');
            return;
        }
        console.group(`getting bits for nodeId:${nodeId}`);
        const { node, incomingEdges } = graph.get(nodeId);
        console.log({node});
        console.log({incomingEdges});
        console.groupEnd()
        
        incomingEdges.forEach((edge) => {
            const { source } = edge;
            visit(source);
        });
        
        visited.add(nodeId);
    }

    nodes.forEach((node) => {
        console.log(`processing ${node.id}`);
        console.log(graph.get(node.id));
        const { incomingEdges } = graph.get(node.id);
        if (incomingEdges.size === 0) {
            console.log('🌳 Oh look! Im the top of a tree');
            visit(node.id);
        }
    });
}


runFlow(nodes, edges);