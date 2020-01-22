import { isString, isObject, keysAreStrings } from '../validators';

/**
 * Types for expressing all possible keys and values on another type
 */
export type ObjectKey<T> = keyof T;
export type ObjectVal<T> = T[ObjectKey<T>]
export type KeyValPair<T> = [ObjectKey<T>, ObjectVal<T>];

/**
 * Type for expressing a string -> string mapping
 */
export type StringMapping = { [key: string]: string };

/**
 * Type guard; only returns `true` if object shape is a
 * flat mapping from string -> string
 * @param val 
 */
export function isStringMapping(val:any): val is StringMapping {
  if (!isObject(val)) return false;
  let keys = Object.keys(val);
  return keysAreStrings(val, keys) && keys.every(isString);
}