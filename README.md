# Vendorate

A wrapper around browserify to vendor node_module dependencies into a single file.

## Installation

```
npm install --save-dev vendorate
```

## Usage

```
npx vendorate some-library SomeLibrary
```

This will output a file like `vendor.some-library.ab3692a8sb82bas2.js`. When used,
the library is exposed globally under `vendor.SomeLibrary`.
