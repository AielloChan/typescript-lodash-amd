define(['lodash/baseToString', 'lodash/charsLeftIndex', 'lodash/charsRightIndex', 'lodash/isIterateeCall', 'lodash/trimmedLeftIndex', 'lodash/trimmedRightIndex'], function(baseToString, charsLeftIndex, charsRightIndex, isIterateeCall, trimmedLeftIndex, trimmedRightIndex) {

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    var value = string;
    string = baseToString(string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
      return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
    }
    chars = (chars + '');
    return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
  }

  return trim;
});
