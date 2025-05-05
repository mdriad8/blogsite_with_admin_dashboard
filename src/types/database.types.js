/**
 * @typedef {string | number | boolean | null | Json[] | { [key: string]: Json }} Json
 */

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} created_at
 * @property {string} title
 * @property {string} content
 * @property {string} excerpt
 * @property {string} slug
 * @property {boolean} published
 * @property {string|null} cover_image
 * @property {string} author_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PostInsert
 * @property {string} [id]
 * @property {string} [created_at]
 * @property {string} title
 * @property {string} content
 * @property {string} excerpt
 * @property {string} slug
 * @property {boolean} [published]
 * @property {string|null} [cover_image]
 * @property {string} author_id
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PostUpdate
 * @property {string} [id]
 * @property {string} [created_at]
 * @property {string} [title]
 * @property {string} [content]
 * @property {string} [excerpt]
 * @property {string} [slug]
 * @property {boolean} [published]
 * @property {string|null} [cover_image]
 * @property {string} [author_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Subscriber
 * @property {string} id
 * @property {string} created_at
 * @property {string} email
 * @property {boolean} confirmed
 * @property {boolean} unsubscribed
 */

/**
 * @typedef {Object} SubscriberInsert
 * @property {string} [id]
 * @property {string} [created_at]
 * @property {string} email
 * @property {boolean} [confirmed]
 * @property {boolean} [unsubscribed]
 */

/**
 * @typedef {Object} SubscriberUpdate
 * @property {string} [id]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {boolean} [confirmed]
 * @property {boolean} [unsubscribed]
 */
