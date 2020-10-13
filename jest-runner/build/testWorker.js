'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setup = setup;
exports.worker = worker;

function _jestHasteMap() {
  const data = _interopRequireDefault(require('jest-haste-map'));

  _jestHasteMap = function () {
    return data;
  };

  return data;
}

function _exit() {
  const data = _interopRequireDefault(require('exit'));

  _exit = function () {
    return data;
  };

  return data;
}

function _jestMessageUtil() {
  const data = require('jest-message-util');

  _jestMessageUtil = function () {
    return data;
  };

  return data;
}

function _jestRuntime() {
  const data = _interopRequireDefault(require('jest-runtime'));

  _jestRuntime = function () {
    return data;
  };

  return data;
}

function _jestResolve() {
  const data = _interopRequireDefault(require('jest-resolve'));

  _jestResolve = function () {
    return data;
  };

  return data;
}

var _runTest = _interopRequireDefault(require('./runTest'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Make sure uncaught errors are logged before we exit.
process.on('uncaughtException', err => {
  console.error(err.stack);
  (0, _exit().default)(1);
});

const formatError = error => {
  if (typeof error === 'string') {
    const {message, stack} = (0, _jestMessageUtil().separateMessageFromStack)(
      error
    );
    return {
      message,
      stack,
      type: 'Error'
    };
  }

  return {
    code: error.code || undefined,
    message: error.message,
    stack: error.stack,
    type: 'Error'
  };
};

const resolvers = new Map();

const getResolver = config => {
  const resolver = resolvers.get(config.name);

  if (!resolver) {
    throw new Error('Cannot find resolver for: ' + config.name);
  }

  return resolver;
};

function setup(setupData) {
  // Module maps that will be needed for the test runs are passed.
  for (const {
    config,
    serializableModuleMap
  } of setupData.serializableResolvers) {
    const moduleMap = _jestHasteMap().default.ModuleMap.fromJSON(
      serializableModuleMap
    );

    resolvers.set(
      config.name,
      _jestRuntime().default.createResolver(config, moduleMap)
    );
  }
}

async function worker({config, globalConfig, path, context}) {
  try {
    return await (0, _runTest.default)(
      path,
      globalConfig,
      config,
      getResolver(config),
      context && {
        ...context,
        changedFiles: context.changedFiles && new Set(context.changedFiles),
        sourcesRelatedToTestsInChangedFiles:
          context.sourcesRelatedToTestsInChangedFiles &&
          new Set(context.sourcesRelatedToTestsInChangedFiles)
      }
    );
  } catch (error) {
    throw formatError(error);
  }
}