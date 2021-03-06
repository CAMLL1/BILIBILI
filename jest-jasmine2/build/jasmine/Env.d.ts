/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { AssertionErrorWithStack, Jasmine, Reporter, Spy } from '../types';
import type { default as Spec } from './Spec';
import type Suite from './Suite';
export default function (j$: Jasmine): {
    new (_options?: object | undefined): {
        specFilter: (spec: Spec) => boolean;
        catchExceptions: (value: unknown) => boolean;
        throwOnExpectationFailure: (value: unknown) => void;
        catchingExceptions: () => boolean;
        topSuite: () => Suite;
        fail: (error: Error | AssertionErrorWithStack) => void;
        pending: (message: string) => void;
        afterAll: (afterAllFunction: (done: (error?: any) => void) => void, timeout?: number | undefined) => void;
        fit: (description: string, fn: (done: (error?: any) => void) => void, timeout?: number | undefined) => Spec;
        throwingExpectationFailures: () => boolean;
        randomizeTests: (value: unknown) => void;
        randomTests: () => boolean;
        seed: (value: unknown) => unknown;
        execute: (runnablesToRun?: string[] | undefined, suiteTree?: Suite | undefined) => Promise<void>;
        fdescribe: (description: string, specDefinitions: Function) => Suite;
        spyOn: (obj: Record<string, Spy>, methodName: string, accessType?: "get" | "set" | "writable" | "configurable" | "enumerable" | "value" | undefined) => Spy;
        beforeEach: (beforeEachFunction: (done: (error?: any) => void) => void, timeout?: number | undefined) => void;
        afterEach: (afterEachFunction: (done: (error?: any) => void) => void, timeout?: number | undefined) => void;
        clearReporters: () => void;
        addReporter: (reporterToAdd: Reporter) => void;
        it: (description: string, fn: (done: (error?: any) => void) => void, timeout?: number | undefined) => Spec;
        xdescribe: (description: string, specDefinitions: Function) => Suite;
        xit: (description: string, fn: (done: (error?: any) => void) => void, timeout?: number | undefined) => Spec;
        beforeAll: (beforeAllFunction: (done: (error?: any) => void) => void, timeout?: number | undefined) => void;
        todo: () => Spec;
        provideFallbackReporter: (reporterToAdd: Reporter) => void;
        allowRespy: (allow: boolean) => void;
        describe: (description: string, specDefinitions: Function) => Suite;
    };
};
