# Vendorate

A wrapper around browserify to vendor node_module dependencies into a single file.

## Installation

With npm:

```
> npm install --save-dev vendorate
```

## Usage

Run from the command line and supply the package name:

```
> npx vendorate some-library SomeLibrary
```

This will output a file like `vendor.some-library.ab3692a8sb82bas2.js`.
This will expose the library globally under `vendor.SomeLibrary`.
