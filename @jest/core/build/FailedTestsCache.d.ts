/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Test } from 'jest-runner';
import type { Config } from '@jest/types';
import type { TestResult } from '@jest/test-result';
export default class FailedTestsCache {
    private _enabledTestsMap?;
    filterTests(tests: Array<Test>): Array<Test>;
    setTestResults(testResults: Array<TestResult>): void;
    updateConfig(globalConfig: Config.GlobalConfig): Config.GlobalConfig;
}