// Type definitions for StringJs 1.9.1
// Project: https://github.com/jprichardson/string.js
// Definitions by: Quan Truong <https://github.com/quantruong/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped 

interface StringJsResult {
    s: string;
}

interface StringJsMethod {
    /**
    * Extracts a string between left and right strings.
    */
    between(left: string, right: string): StringJsResult;
    /**
    * Remove any underscores or dashes and convert a string into camel casing.
    */
    camelize(): StringJsResult;
    /**
    * Capitalizes the first character of a string.
    */
    capitalize(): StringJsResult;
    /**
    * Removes prefix from start of string.
    */
    chompLeft(prefix: string): StringJsResult;
    /**
    * Removes suffix from end of string.
    */
    chompRight(suffix: string): StringJsResult;
    /**
    * Converts all adjacent whitespace characters to a single space.
    */
    collapseWhitespace(): StringJsResult;
    /**
    * Returns true if the string contains ss.
    */
    contains(ss: string): StringJsResult;
    /**
    * Removes suffix from end of string.
    */
    count(substring: string): StringJsResult;
    /**
    * Returns a converted camel cased string into a string delimited by dashes.
    */
    dasherize(): StringJsResult;
    /**
    * Decodes HTML entities into their string representation.
    */
    decodeHTMLEntities(): StringJsResult;
    /**
    * Returns true if the string ends with ss.
    */
    endsWith(ss: string): StringJsResult;
    /**
    * Escapes the html.
    */
    escapeHTML(): StringJsResult;
    /**
    * Modifies String.prototype to have all of the methods found in string.js.
    */
    extendPrototype(): void;
    /**
    * Ensures string starts with prefix.
    */
    ensureLeft(prefix: string): StringJsResult;
    /**
    * Ensures string ends with suffix.
    */
    ensureRight(suffix:string): StringJsResult;
    /**
    * Transforms the input into a human friendly form.
    */
    humanize(): StringJsResult;
    /**
    * Returns true if the string contains the ss.
    */
    include(ss:string): boolean;
    /**
    * Return true if the string contains only letters.
    */
    isAlpha(): boolean;
    /**
    * Return true if the string contains only letters and numbers
    */
    isAlphaNumeric(): boolean;
    /**
    * Return true if the string is solely composed of whitespace or is null/undefined.
    */
    isEmpty(): boolean;
    /**
    * Return true if the character or string is lowercase
    */
    isLower(): boolean;
    /**
    * Return true if the string only contains digits
    */
    isNumeric(): boolean;
    /**
    * Returns true if the character or string is uppercase
    */
    isUpper(): boolean;
    /**
    * Return the substring denoted by n positive left-most characters.
    */
    left(n:number): StringJsResult;
    /**
    * Property to return the length of the string object.
    */
    length: number;
    /**
    * Returns an array with the lines. Cross-platform compatible.
    */
    lines(): string;
    /**
    * Pads the string in the center with specified character. char may be a string or a number, defaults is a space. 
    */
    pad(len: number): StringJsResult;
    /**
    * Pads the string in the center with specified character. char may be a string or a number, defaults is a space. 
    */
    pad(len: number, char: string): StringJsResult;
    /**
    * Left pads the string.
    */
    padLeft(len: number): StringJsResult;
    /**
    * Left pads the string.
    */
    padLeft(len: number, char: string): StringJsResult;
    /**
    * Return true if the string contains only letters.
    */
    padRight(len: number): StringJsResult;
    /**
    * Return true if the string contains only letters.
    */
    padRight(len: number, char: string): StringJsResult;
    /**
    * Parses a CSV line into an array.
    */
    parseCSV(): string;
    /**
    * Returns a string repeated n times.
    */
    repeat(n:number): StringJsResult;
    /**
    * Return the new string with all occurrences of ss replaced with newstr.
    */
    replaceAll(ss:string, newstr:string): StringJsResult;
    /**
    * Restore the original String prototype. Typically used in conjunction with extendPrototype().
    */
    restorePrototype(): void;
    /**
    * Return the substring denoted by n positive right-most characters.
    */
    right(n: number): StringJsResult;
    /**
    * The encapsulated native string representation of an S object.
    */
    s: string;
    /**
    * Sets the string to a value.
    */
    setValue(value:string): StringJsResult;
    /**
    * Converts the text into a valid url slug.
    */
    slugify(): StringJsResult;
    /**
    * Return true if the string starts with prefix.
    */
    startsWith(prefix:string): boolean;
    /**
    * Strip all of the punctuation.
    */
    stripPunctuation(): StringJsResult;
    /**
    * Strip all of the HTML tags or tags specified by the parameters.
    */
    stripTags(): StringJsResult;
    /**
    * Takes a string and interpolates the values. Defaults to {{ and }} for Mustache compatible templates. 
    */
    template(values: any): StringJsResult;
    /**
    * Takes a string and interpolates the values. Defaults to {{ and }} for Mustache compatible templates. 
    */
    template(values: any,open:string,close:string): StringJsResult;
    /**
    * Returns a string repeated n times.
    */
    times(n:number): StringJsResult;
    /**
    * Converts a a logical truth string to boolean.
    */
    toBoolean(): boolean;
    /**
    * Converts an array or object to a CSV line.
    */
    toCSV(): StringJsResult;
    /**
    * Converts an array or object to a CSV line.
    */
    toCSV(options:any): StringJsResult;
    /**
    * Return the float value, wraps parseFloat.
    */
    toFloat(): number;
    /**
    * Return the float value, wraps parseFloat.
    */
    toFloat(precision: number): number;
    /**
    * Return the number value in integer form.
    */
    toInt(): number;
    /**
    * Return the string representation of an S object.
    */
    toString(): string;
    /**
    * Return the string with leading and trailing whitespace removed. Reverts to native trim() if it exists.
    */
    trim(): StringJsResult;
    /**
    * Return the string with leading and whitespace removed.
    */
    trimLeft(): StringJsResult;
    /**
    * Return the string with trailing whitespace removed.
    */
    trimRight(): StringJsResult;
    /**
    * Truncates the string, accounting for word placement and character count.
    */
    truncate(length: number): StringJsResult;
    /**
    * Truncates the string, accounting for word placement and character count.
    */
    truncate(length: number, chars: string): StringJsResult;
    /**
    * Returns converted camel cased string into a string delimited by underscores.
    */
    underscore(): StringJsResult;
    /**
    * Unescapes the html.
    */
    unescapeHTML(): StringJsResult;
    /**
    * WrapHTML helps to avoid concatenation of element with string. the string will be wrapped with HTML Element and their attributes.
    */
    wrapHTML(): StringJsResult;
}

interface StringJs {
    (inputValue: string): StringJsMethod;
}
declare var S: StringJs;