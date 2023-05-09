import { INode } from 'src/types';

// Example for a text-capitalize node
export const textToUpperCase: INode = {
  type: 'textToUpperCase',
  handles: {
    source: ['input'],
    target: ['output'],
  },
  data: { label: 'To Uppercase' },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async process(msg: Record<string, unknown>): Promise<Record<string, unknown>> {
    try {
      if (!msg.text || typeof msg.text !== 'string') {
        throw new Error('msg.text is not a string');
      }
      return { ...msg, text: msg.text.toUpperCase() };
    } catch (e) {
      // handle the error here
      // console.error(e); TODO: Is logging the error needed? 
      throw e; // rethrow the error so it can be caught by the caller
    }
  },
};