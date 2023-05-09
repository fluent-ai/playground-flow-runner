// Interfaces for nodes
export interface IExecutionNode {
  id?: string; //UUID
  type: string | undefined;
  handles?: {
    source: [
      id: string,
    ],
    target: [
      id: string,
    ]
  };
  method(
    msg: Record<string, unknown>,
    properties?: Record<string, unknown>
  ) : Promise<Record<string, unknown>>;  
  data: Record<string, unknown>;
  callbacks: Array<(msg: Record<string, unknown>) => void>;
  position?: { x: number; y: number };
}
