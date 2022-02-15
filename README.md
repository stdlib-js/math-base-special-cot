<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cotangent

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [cotangent][trigonometric-functions] of a number.

<section class="intro">

</section>

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var cot = require( '@stdlib/math-base-special-cot' );
```

#### cot( x )

Evaluates the [cotangent][trigonometric-functions] of `x` (in radians).

```javascript
var v = cot( 0.0 );
// returns Infinity

v = cot( 3.141592653589793/2.0 );
// returns ~0.0

v = cot( -3.141592653589793/4.0 );
// returns ~-1.0

v = cot( 3.141592653589793/4.0 );
// returns ~1.0

v = cot( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var PI = require( '@stdlib/constants-float64-pi' );
var cot = require( '@stdlib/math-base-special-cot' );

var x = linspace( -PI/2.0, PI/2.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( cot( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cot.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cot

[test-image]: https://github.com/stdlib-js/math-base-special-cot/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-cot/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cot/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cot/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cot/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cot/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cot/main/LICENSE

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

</section>

<!-- /.links -->
