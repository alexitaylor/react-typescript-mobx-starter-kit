/**
 * @method isDefined
 * @description returns whether or not a value is defined (not null or undefined)
 * @param {any} value
 * @return {boolean}
 */
export const isDefined = (value: any): boolean => typeof value !== 'undefined' && value !== null;
