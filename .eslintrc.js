module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {"max": 3},
            "multiline": {"max": 1,}
        }],
        "vue/html-indent": ["error", 2, {
            "alignAttributesVertically": false,
        }],
        "template-curly-spacing": "off",
        indent: "off",
        'semi': 0,
        'baseIndent': 0
    }
}
