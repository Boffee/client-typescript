// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Entity, EntityT } from '../../worldql-fb/messages/entity';
import { Record, RecordT } from '../../worldql-fb/messages/record';
import { Vec3d, Vec3dT } from '../../worldql-fb/messages/vec3d';


export class Message {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Message {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMessage(bb:flatbuffers.ByteBuffer, obj?:Message):Message {
  return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMessage(bb:flatbuffers.ByteBuffer, obj?:Message):Message {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

instruction():string|null
instruction(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
instruction(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

senderUuid():string|null
senderUuid(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
senderUuid(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

worldName():string|null
worldName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
worldName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

data():string|null
data(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
data(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

records(index: number, obj?:Record):Record|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Record()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

entities(index: number, obj?:Entity):Entity|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new Entity()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

entitiesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

position(obj?:Vec3d):Vec3d|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new Vec3d()).__init(this.bb_pos + offset, this.bb!) : null;
}

flex(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

flexLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

flexArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startMessage(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addInstruction(builder:flatbuffers.Builder, instructionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, instructionOffset, 0);
}

static addSenderUuid(builder:flatbuffers.Builder, senderUuidOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, senderUuidOffset, 0);
}

static addWorldName(builder:flatbuffers.Builder, worldNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, worldNameOffset, 0);
}

static addData(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, dataOffset, 0);
}

static addRecords(builder:flatbuffers.Builder, recordsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, recordsOffset, 0);
}

static createRecordsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRecordsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addEntities(builder:flatbuffers.Builder, entitiesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, entitiesOffset, 0);
}

static createEntitiesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startEntitiesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addPosition(builder:flatbuffers.Builder, positionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(6, positionOffset, 0);
}

static addFlex(builder:flatbuffers.Builder, flexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, flexOffset, 0);
}

static createFlexVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFlexVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}


unpack(): MessageT {
  return new MessageT(
    this.instruction(),
    this.senderUuid(),
    this.worldName(),
    this.data(),
    this.bb!.createObjList(this.records.bind(this), this.recordsLength()),
    this.bb!.createObjList(this.entities.bind(this), this.entitiesLength()),
    (this.position() !== null ? this.position()!.unpack() : null),
    this.bb!.createScalarList(this.flex.bind(this), this.flexLength())
  );
}


unpackTo(_o: MessageT): void {
  _o.instruction = this.instruction();
  _o.senderUuid = this.senderUuid();
  _o.worldName = this.worldName();
  _o.data = this.data();
  _o.records = this.bb!.createObjList(this.records.bind(this), this.recordsLength());
  _o.entities = this.bb!.createObjList(this.entities.bind(this), this.entitiesLength());
  _o.position = (this.position() !== null ? this.position()!.unpack() : null);
  _o.flex = this.bb!.createScalarList(this.flex.bind(this), this.flexLength());
}
}

export class MessageT {
constructor(
  public instruction: string|Uint8Array|null = null,
  public senderUuid: string|Uint8Array|null = null,
  public worldName: string|Uint8Array|null = null,
  public data: string|Uint8Array|null = null,
  public records: (RecordT)[] = [],
  public entities: (EntityT)[] = [],
  public position: Vec3dT|null = null,
  public flex: (number)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const instruction = (this.instruction !== null ? builder.createString(this.instruction!) : 0);
  const senderUuid = (this.senderUuid !== null ? builder.createString(this.senderUuid!) : 0);
  const worldName = (this.worldName !== null ? builder.createString(this.worldName!) : 0);
  const data = (this.data !== null ? builder.createString(this.data!) : 0);
  const records = Message.createRecordsVector(builder, builder.createObjectOffsetList(this.records));
  const entities = Message.createEntitiesVector(builder, builder.createObjectOffsetList(this.entities));
  const flex = Message.createFlexVector(builder, this.flex);

  Message.startMessage(builder);
  Message.addInstruction(builder, instruction);
  Message.addSenderUuid(builder, senderUuid);
  Message.addWorldName(builder, worldName);
  Message.addData(builder, data);
  Message.addRecords(builder, records);
  Message.addEntities(builder, entities);
  Message.addPosition(builder, (this.position !== null ? this.position!.pack(builder) : 0));
  Message.addFlex(builder, flex);

  return Message.endMessage(builder);
}
}
