/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Config } from '@jest/types';
import type { AggregatedResult, SerializableError, TestResult } from '@jest/test-result';
import type { FS as HasteFS, ModuleMap } from 'jest-haste-map';
import HasteResolver = require('jest-resolve');
import type { worker } from './coverage_worker';
export declare type ReporterOnStartOptions = {
    estimatedTime: number;
    showStatus: boolean;
};
export declare type Context = {
    config: Config.ProjectConfig;
    hasteFS: HasteFS;
    moduleMap: ModuleMap;
    resolver: HasteResolver;
};
export declare type Test = {
    context: Context;
    duration?: number;
    path: Config.Path;
};
export declare type CoverageWorker = {
    worker: typeof worker;
};
export declare type CoverageReporterOptions = {
    changedFiles?: Set<Config.Path>;
    sourcesRelatedToTestsInChangedFiles?: Set<Config.Path>;
};
export declare type CoverageReporterSerializedOptions = {
    changedFiles?: Array<Config.Path>;
    sourcesRelatedToTestsInChangedFiles?: Array<Config.Path>;
};
export declare type OnTestStart = (test: Test) => Promise<void>;
export declare type OnTestFailure = (test: Test, error: SerializableError) => Promise<any>;
export declare type OnTestSuccess = (test: Test, result: TestResult) => Promise<any>;
export interface Reporter {
    readonly onTestResult: (test: Test, testResult: TestResult, aggregatedResult: AggregatedResult) => Promise<void> | void;
    readonly onRunStart: (results: AggregatedResult, options: ReporterOnStartOptions) => Promise<void> | void;
    readonly onTestStart: (test: Test) => Promise<void> | void;
    readonly onRunComplete: (contexts: Set<Context>, results: AggregatedResult) => Promise<void> | void;
    readonly getLastError: () => Error | void;
}
export declare type SummaryOptions = {
    estimatedTime?: number;
    roundTime?: boolean;
    width?: number;
};
export declare type TestRunnerOptions = {
    serial: boolean;
};
export declare type TestRunData = Array<{
    context: Context;
    matches: {
        allTests: number;
        tests: Array<Test>;
        total: number;
    };
}>;
export declare type TestSchedulerContext = {
    firstRun: boolean;
    previousSuccess: boolean;
    changedFiles?: Set<Config.Path>;
};
