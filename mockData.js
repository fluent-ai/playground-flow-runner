const nodes = [
    {
      "id": "node_0",
      "type": "input",
      "position": {
        "x": 201.1875,
        "y": -62
      },
      "data": {
        "label": "input node"
      },
      "width": 150,
      "height": 40,
      "selected": false,
      "positionAbsolute": {
        "x": 201.1875,
        "y": -62
      },
      "dragging": false
    },
    {
      "id": "node_1",
      "type": "textUpdater",
      "position": {
        "x": 265.53125,
        "y": 19
      },
      "data": {
        "label": "textUpdater node"
      },
      "width": 231,
      "height": 24,
      "selected": false,
      "dragging": false,
      "positionAbsolute": {
        "x": 265.53125,
        "y": 19
      }
    },
    {
      "id": "node_2",
      "type": "default",
      "position": {
        "x": 236.03125,
        "y": 92
      },
      "data": {
        "label": "default node"
      },
      "width": 150,
      "height": 40,
      "selected": false,
      "positionAbsolute": {
        "x": 236.03125,
        "y": 92
      },
      "dragging": false
    },
    {
      "id": "node_3",
      "type": "output",
      "position": {
        "x": 292.53125,
        "y": 174
      },
      "data": {
        "label": "output node"
      },
      "width": 150,
      "height": 40,
      "selected": false,
      "positionAbsolute": {
        "x": 292.53125,
        "y": 174
      },
      "dragging": false
    }
  ]
const edges = [
    {
      "source": "node_0",
      "sourceHandle": null,
      "target": "node_1",
      "targetHandle": null,
      "id": "reactflow__edge-node_0-node_1"
    },
    {
      "source": "node_1",
      "sourceHandle": "output",
      "target": "node_2",
      "targetHandle": null,
      "id": "reactflow__edge-node_1output-node_2"
    },
    {
      "source": "node_2",
      "sourceHandle": null,
      "target": "node_3",
      "targetHandle": null,
      "id": "reactflow__edge-node_2-node_3"
    }
  ]


  export  {nodes, edges}