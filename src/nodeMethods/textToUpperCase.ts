export async function textToUpperCase(msg: Record<string, unknown>): Promise<Record<string, unknown>> {
  console.log('🧮 Running textToUpperCase node')
  console.log({ msg })
  return new Promise((resolve, reject) => {
    if (!msg.payload || typeof msg.payload !== 'string') {
      reject(new Error('msg.payload is not a string'))
    }
    resolve({ ...msg, payload: (msg.payload as string).toUpperCase() })
  })
}
