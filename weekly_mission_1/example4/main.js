const Logger = require('./logger') // Invocas el módulo que contiene la clase

const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase

dbLogger.info('This is an informational message')

const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')