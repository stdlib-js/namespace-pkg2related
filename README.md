<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# pkg2related

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return package names related to a specified package name.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/namespace-pkg2related
```

</section>

<section class="usage">

## Usage

```javascript
var pkg2related = require( '@stdlib/namespace-pkg2related' );
```

#### pkg2related( pkg )

Returns package names related to a specified package name.

```javascript
var out = pkg2related( '@stdlib/math-base-special-sin' );
// returns [...]
```

If provided an unrecognized package name, the function returns `null`.

```javascript
var out = pkg2related( 'unrecognized_pkg_beep_boop_bop_bip' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function supports providing both internal and standalone package names.

    ```javascript
    var out = pkg2related( '@stdlib/math-base-special-sin' );
    // returns [...]
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var aliases = require( '@stdlib/namespace-aliases' );
var alias2pkg = require( '@stdlib/namespace-alias2pkg' );
var pkg2related = require( '@stdlib/namespace-pkg2related' );

var list;
var len;
var idx;
var pkg;
var v;
var i;

list = aliases();
len = list.length;

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    v = list[ idx ];
    pkg = alias2pkg( v );
    console.log( 'alias: %s. related: %s.', v, pkg2related( pkg ).join( ', ' ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/namespace-pkg2related
```

</section>

<section class="usage">

### Usage

```text
Usage: stdlib-pkg2related [options] namespace-pkg2related

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ stdlib-pkg2related '@stdlib/math-base-special-sin'
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/namespace/alias2related`][@stdlib/namespace/alias2related]: return aliases related to a specified alias.
-   [`@stdlib/namespace/aliases`][@stdlib/namespace/aliases]: standard library aliases.
-   [`@stdlib/namespace/pkg2alias`][@stdlib/namespace/pkg2alias]: return the alias associated with a specified package name.

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

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/namespace-pkg2related.svg
[npm-url]: https://npmjs.org/package/@stdlib/namespace-pkg2related

[test-image]: https://github.com/stdlib-js/namespace-pkg2related/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/namespace-pkg2related/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/namespace-pkg2related/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/namespace-pkg2related?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/namespace-pkg2related.svg
[dependencies-url]: https://david-dm.org/stdlib-js/namespace-pkg2related/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/namespace/alias2related]: https://github.com/stdlib-js/namespace-alias2related

[@stdlib/namespace/aliases]: https://github.com/stdlib-js/namespace-aliases

[@stdlib/namespace/pkg2alias]: https://github.com/stdlib-js/namespace-pkg2alias

<!-- </related-links> -->

</section>

<!-- /.links -->
