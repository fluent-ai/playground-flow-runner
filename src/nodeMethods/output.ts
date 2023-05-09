export async function output(msg: Record<string, unknown>): Promise<Record<string, unknown>> {
  console.log('🧮 Running output node')
  return new Promise(resolve => {
    console.log({ msg })
    resolve(msg)
  })
}
