// @flow

/**
 * @typedef {Object} SharePayload
 * @property {'INVITE' | 'REQUEST' | 'CHALLENGE' | 'SHARE'} intent - [TODO]
 * Represents content to be shared by the user.
 * @property {string} image - A string containing data URL of a base64
 * encoded image.
 * @property {string} text - Text message of this share.
 * @property {Object?} data - An object to be passed to any session launched
 * from this update. It can be accessed from `ViberPlay.getEntryPointData()`.
 * Its size must be <= 1000 chars when stringified.
 */
export type SharePayload = {
  intent: 'INVITE' | 'REQUEST' | 'CHALLENGE' | 'SHARE',
  image: string,
  text: string,
  data: ?Object,
};
