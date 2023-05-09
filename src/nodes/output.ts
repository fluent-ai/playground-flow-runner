import { IExecutionNode } from 'src/types'

export const output: IExecutionNode = {
  type: 'output',
  handles: {
    source: ['input'],
    target: ['output'],
  },
  data: { label: 'Text input', input: '' },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async process(msg: Record<string, unknown>): Promise<Record<string, unknown>> {
    try {
      // eslint-disable-next-line no-console
      console.log({ msg })
      return { ...msg }
    } catch (e) {
      // handle the error here
      // console.error(e); TODO: Is logging the error needed?
      throw e // rethrow the error so it can be caught by the caller
    }
  },
}
