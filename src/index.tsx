// import FileLogger from 'react-native-file-logger';

// FileLogger.configure({
//   logLevel: FileLogger.levels.INFO,
//   maxFiles: 5,
//   maxSize: 5000000,
// });

class LoggerObject {
  
  name: string;

  constructor(name?: string) {
    this.name = name || 'Logger';
  }

  format(level: string, message: string): string {
    return `[${this.name}] [${level}] ${message}`;
  }

  debug(message: string): void {
    //     FileLogger.debug(this.format('debug', message));
    console.log(this.format('debug', message));
  }

  info(message: string): void {
    //     FileLogger.info(this.format('info', message));
    console.info(this.format('info', message));
  }

  warn(message: string): void {
    //     FileLogger.warn(this.format('warn', message));
    console.warn(this.format('warn', message));
  }

  error(message: string): void {
    //     FileLogger.error(this.format('error', message));
    console.error(this.format('error', message));
  }
}

export default LoggerObject;