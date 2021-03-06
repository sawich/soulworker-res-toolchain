import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint16("id")
  .uint16("v5")
  .uint32("v6")
  .uint32("v7")
  .uint32("v8")
  .uint8("v9")
  .uint32("v10")
  .uint16("v11")
  .uint16("v12")
  .swstring("v13")
  .swstring("v14")
  .swstring("v15")
  .int16("v16")
  .swstring("v17")
  .swstring("v18")
  .int16("v19")
  .swstring("v20")
  .uint32("v21")
  .uint8("v22");
