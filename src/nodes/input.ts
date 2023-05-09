import { INode } from 'src/types';

export const input: INode = {
  type: 'input',
  handles: {
    source: ['input'],
    target: ['output'],
  },
  data: { label: 'Text input', input: '' },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async process(msg: Record<string, unknown>): Promise<Record<string, unknown>> {
    try {
      if (!this.data.input || typeof this.data.input !== 'string') {
        throw new Error('data.input is not a string');
      }
      return { ...msg, payload: this.data.input };
    } catch (e) {
      // handle the error here
      // console.error(e); TODO: Is logging the error needed? 
      throw e; // rethrow the error so it can be caught by the caller
    }
  },
};