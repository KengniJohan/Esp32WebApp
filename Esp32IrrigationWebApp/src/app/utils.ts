import { formatDate } from "@angular/common";

export class Utils {
    

  static getFormattedTimeRange(start: Date, end: Date, locale: string): any {
    return this.getFormattedTime(start, locale) + ' - ' + this.getFormattedTime(end, locale);
  }

  static getFormattedDate(date: Date, locale: string): any {
    return formatDate(date, 'dd / MM / yyyy', locale);
  }

  static getFormattedTime(date: Date, locale: string): any {
    return formatDate(date, 'HH:mm', locale);
  }
}