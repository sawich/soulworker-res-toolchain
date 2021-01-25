import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("Id")
  .uint16("s1")
  .uint8("b1")
  .swstring("str1")
  .uint32("i2")
  .uint32("i3")
  .uint32("i4")
  .uint32("i5")
  .uint32("i6")
  .uint8("b2")
  .uint32("i7")
  .uint8("b3")
  .uint8("b4")
  .uint32("i8")
  .uint8("b5")
  .uint32("i9")
  .uint8("b6")
  .uint32("i10")
  .uint16("s2")
  .uint16("s3")
  .uint16("s4")
  .uint8("b7")
  .uint8("b8")
  .uint8("b9")
  .uint8("b10")
  .uint8("b11")
  .uint8("b12")
  .uint16("s5")
  .uint16("s6")
  .uint16("s7")
  .swstring("str2")
  .uint8("b13")
  .uint32("i11")
  .uint32("i12")
  .swstring("str3")
  .uint16("s8")
  .uint16("s9")
  .uint16("s10")
  .uint16("s11")
  .uint16("s12")
  .uint16("s13")
  .uint16("s14")
  .uint16("s15")
  .uint16("s16")
  .uint16("s17")
  .uint16("s18")
  .uint16("s19")
  .uint16("s20")
  .uint16("s21")
  .uint16("s22")
  .uint16("s23")
  .swstring("str4")
  .swstring("str5")
  .swstring("str6")
  .swstring("str7")
  .swstring("str8");
