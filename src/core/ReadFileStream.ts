import { promises } from 'fs'
import { CompilerColumnReturn, CompilerToColumns } from './compilers/CompilerToColumns';
import { CompilerObjectReturn, CompilerToObject } from './compilers/CompilerToObject';
import {  CompilerRowReturn, CompilerToRows } from './compilers/CompilerToRows';

export interface CSVFileOptions{
  encoding?: BufferEncoding,
  parse?: 'columns' | 'rows' | 'object'
}

type CSVFileReturns<T> = Promise< 
  CompilerRowReturn      |   
  CompilerColumnReturn   | 
  CompilerObjectReturn   | 
  undefined              |
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
      return CompilerToObject(text)
    case 'columns':
      return CompilerToColumns(text)
    case 'rows':
      return CompilerToRows(text)
    default:
      return CompilerToColumns(text)
  }
}