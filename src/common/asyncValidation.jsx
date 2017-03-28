const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'meesam' ].includes(values.ProjectName)) {
        throw { ProjectName: 'That ProjectName is taken' }
      }
    })
}

export default asyncValidate