"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const tsutils = __importStar(require("tsutils"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-dynamic-delete',
    meta: {
        docs: {
            category: 'Best Practices',
            description: 'Disallow the delete operator with computed key expressions',
            recommended: false,
        },
        fixable: 'code',
        messages: {
            dynamicDelete: 'Do not delete dynamically computed property keys.',
        },
        schema: [],
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        function createFixer(member) {
            if (member.property.type === experimental_utils_1.AST_NODE_TYPES.Literal &&
                typeof member.property.value === 'string') {
                return createPropertyReplacement(member.property, `.${member.property.value}`);
            }
            return undefined;
        }
        return {
            'UnaryExpression[operator=delete]'(node) {
                if (node.argument.type !== experimental_utils_1.AST_NODE_TYPES.MemberExpression ||
                    !node.argument.computed ||
                    isNecessaryDynamicAccess(diveIntoWrapperExpressions(node.argument.property))) {
                    return;
                }
                context.report({
                    fix: createFixer(node.argument),
                    messageId: 'dynamicDelete',
                    node: node.argument.property,
                });
            },
        };
        function createPropertyReplacement(property, replacement) {
            return (fixer) => fixer.replaceTextRange(getTokenRange(property), replacement);
        }
        function getTokenRange(property) {
            const sourceCode = context.getSourceCode();
            return [
                sourceCode.getTokenBefore(property).range[0],
                sourceCode.getTokenAfter(property).range[1],
            ];
        }
    },
});
function diveIntoWrapperExpressions(node) {
    if (node.type === experimental_utils_1.AST_NODE_TYPES.UnaryExpression) {
        return diveIntoWrapperExpressions(node.argument);
    }
    return node;
}
function isNecessaryDynamicAccess(property) {
    if (property.type !== experimental_utils_1.AST_NODE_TYPES.Literal) {
        return false;
    }
    if (typeof property.value === 'number') {
        return true;
    }
    return (typeof property.value === 'string' &&
        !tsutils.isValidPropertyAccess(property.value));
}
//# sourceMappingURL=no-dynamic-delete.js.map