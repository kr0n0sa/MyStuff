import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';
import * as fs from 'fs';

export class CustomLogger implements LoggerService {
  // შემოაქვს customlogger ი 2 პრივატული proterty ებით
  // logLevels ხვდები რაც არის. cosn--nsoleLogger კიდევ
  // ConsoleLogger კლასის ინსტანცე aris, რომელსაც nest
  // იძლევა
  private logLevels: LogLevel[] = [];
  private consoleLogger;
  constructor() {
    this.consoleLogger = new ConsoleLogger('');
  }
  // აქეფან შემოგვაქვს სხვადსხვა logging method ები. თუ
  // შესაბამისი log level არის გააქტიურებული, ის გააქტიურდება
  error(message: any) {
    if (this.validLogLevel('error')) {
      this.writeLine(`[error]:${message}`);
    }
  }

  log(message: any, ...optionalParams: any[]) {
    if (this.validLogLevel('log')) {
      this.writeLine(`[log]:${message}`);
    }
  }

  warn(message: any, ...optionalParams: any[]) {
    if (this.validLogLevel('warn')) {
      this.writeLine(`[warn]:${message}`);
    }
  }

  debug?(message: any, ...optionalParams: any[]) {
    if (this.validLogLevel('debug')) {
      this.writeLine(`[debug]:${message}`);
    }
  }

  verbose?(message: any, ...optionalParams: any[]) {
    if (this.validLogLevel('verbose')) {
      this.writeLine(`[verbose]:${message}`);
    }
  }
  setLogLevels?(levels: LogLevel[]) {
    this.logLevels = levels;
  }

  // დააბრუნებს true ს, თუ logLevels propery ს აქვს თუ არა
  // loglevel თუ ის ცარიელია
  validLogLevel(logLevel: LogLevel) {
    return this.logLevels.length === 0 || this.logLevels.indexOf(logLevel) > -1;
  }

  // ეს სპეციალურ ფაილში ჩაწერს timestamped ინფოს
  // და თან კონსოლში ჩააგდებს ამ ინფოს
  writeLine(message: string, path = '') {
    const messageWithTimestamp = `${new Date().toUTCString()} ${message}\n`;
    this.consoleLogger.log(message);
    fs.appendFile(!!path ? path : 'log.txt', messageWithTimestamp, (err) => {
      if (err) throw err;
    });
  }
}

// ეს არის გაშვებული logger.module.ts ში. მერე სადაც გინდა იქ გაუშვი
