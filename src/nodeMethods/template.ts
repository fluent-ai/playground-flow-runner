import Mustache from 'mustache'

export async function template(
  msg: Record<string, unknown>,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  console.log('🧮 Running template node')
  return new Promise((resolve, reject) => {
    if (!data.template || typeof data.template !== 'string') {
      reject(new Error('data.template is not a string'))
    }
    try {
      resolve({ ...msg, payload: Mustache.render(data.template as string, { msg, data }) })
    } catch (error) {
      reject(error)
    }
  })
}
