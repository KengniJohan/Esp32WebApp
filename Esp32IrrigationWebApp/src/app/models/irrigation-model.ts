export class IrrigationModel {
  id?: number;
  start?: Date;
  end?: Date;
  reason?: string;

  constructor(id: number, start?: Date, end?: Date, reason?: string) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.reason = reason;
  }
}