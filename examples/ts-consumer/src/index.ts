//1 no reference to getAwsSecret
//2 reference but not used
//2 reference and used

// import { add, foo } from 'library';
// foo();
//console.log(add(1, 2));

import { add, getAwsSecret } from '@jagsjoint/example-library';
// getAwsSecret('xx');

console.log(add(1, 2));
