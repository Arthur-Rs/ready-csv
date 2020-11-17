import { promises } from 'fs'
import { CompiledColumn, compileToColumn } from './compiles/column';
import { CompiledObject, compileToObject } from './compiles/object';
import { CompiledRow, compileToRow } from './compiles/row';

export interface CSVFileOptions{
  encoding?: BufferEncoding,
  parse?: 'columns' | 'rows' | 'object'
}

type CSVFileReturns<T> = Promise< 
  CompiledObject |   
  CompiledColumn | 
  CompiledRow    |  
  undefined      |
  T
>

export const readCSVFile = 
  async <T>( path: string, options?: CSVFileOptions ): CSVFileReturns<T> => {
  
  const data = await promises.readFile(path, {
    encoding: options?.encoding
  })

  const text = data.toString().trim()

  switch (options?.parse) {
    case 'object':
      return compileToObject(text)
    case 'columns':
      return compileToColumn(text)
    case 'rows':
      return compileToRow(text)
    default:
      return compileToColumn(text)
  }
}