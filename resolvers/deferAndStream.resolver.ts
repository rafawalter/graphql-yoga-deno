export async function* alphabetStream() {
  for (const character of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']) {
    yield character
    await wait(1000)
  }
}
export const deferFastField = async () => {
  await wait(500)
  return 'I am speed'
}
export const deferSlowField = async (_, {waitFor}) => {
  await wait(waitFor)
  return 'I am slow'
}

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

