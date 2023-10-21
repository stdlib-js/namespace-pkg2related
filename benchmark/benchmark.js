/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isStringArray = require( '@stdlib/assert-is-string-array' ).primitives;
var pkg = require( './../package.json' ).name;
var pkg2related = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		'@stdlib/math-base-special-abs',
		'@stdlib/math-base-special-cos',
		'@stdlib/math-base-special-sin'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = pkg2related( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( v.length > 0 && !isStringArray( v ) ) {
		b.fail( 'should return an array of strings' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
