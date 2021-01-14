import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint8('Id')
  .uint32('v5')
  .uint32('v6')
  .uint32('v7')
  .uint32('v8')
  .uint32('v9')
  .uint32('v10')
  .uint32('v11')
  .uint32('v12')
  .uint32('v13')
  .uint32('v14')
  .swstring('v15')
  .swstring('v16')
  .swstring('v17')
  .swstring('v18')
  .swstring('v19')
  .swstring('v20')
  .swstring('v21')
  .swstring('v22')
  .swstring('v23')
  .swstring('v24')
  .uint32('v25')
  .uint32('v26')
  .uint32('v27')
  .uint32('v28')
  .uint32('v29')
  .uint32('v30')
  .uint32('v31')
  .uint32('v32')
  .uint32('v33')
  .uint32('v34')
