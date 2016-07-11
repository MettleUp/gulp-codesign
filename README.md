# gulp-codesign

Sign macOS / OS X executables using Apple's codesign tool

## Usage

```javascript
var codesign = require('gulp-codesign');

gulp.task('sign', function() {
  return gulp.src([])
    .pipe(codesign('Developer ID Application: Your Name (XXXXXXXXXX)'));
});
```

## Options

You must provide the name of the Developer ID Application that you're signing the app with

## License

Copyright (c) 2016 Mettle LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Thanks

Thanks to [4ver](https://github.com/4ver) and his [gulp-signtool](https://github.com/4ver/gulp-signtool) module, on which this module was framed.
