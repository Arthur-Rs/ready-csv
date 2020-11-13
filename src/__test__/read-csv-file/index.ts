import { readCSVFile } from './../..'

const init = async () => {
  const columns = await readCSVFile(__dirname + '/data.csv', {
    encoding: 'utf8',
    parse: 'columns'
  })

  console.log(columns)
}

init()

