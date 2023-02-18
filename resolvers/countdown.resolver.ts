export const countdown = {
  subscribe: async function* (_, {from}) {
    for (let i = from; i>0; i--) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      yield { countdown: i }
    }
  }
}
